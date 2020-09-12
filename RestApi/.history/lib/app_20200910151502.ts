import * as express from "express";
import * as fs from "fs";
import * as dotenv from "dotenv";
import * as ip from "ip";
import * as compression from "compression";
import * as logger from "morgan";
import * as helmet from "helmet";
import * as cookieParser from "cookie-parser";
import * as expressValidator from "express-validator";
import { CONFIG_PATH, BASE_URI, DEV_IP, RECETTE_IP, PROD_IP } from "./constants";
import { Utils } from "./core/utils";
import { AppRoutes } from "../lib/routes/app.routes";
const { Client } = require('pg');
import { Sequelize, DataTypes } from "sequelize";
import * as path from "path";
 
dotenv.config();
// Read database configuration parameters from a json config file
const DATABASE = JSON.parse(
    fs.readFileSync(`${CONFIG_PATH}/db/database.json`, "utf8")
).postgre;

export class App {
    public app: express.Application;
    public routePrv: AppRoutes = new AppRoutes();

    // DB params
    private readonly host: string = process.env.DB_HOST || DATABASE.host;
    private readonly hostRecette: string = process.env.DB_HOST || DATABASE.host_recette;
    private readonly driver: string = process.env.DB_DRIVER || DATABASE.driver;
    private readonly port: number = process.env.DB_PORT || DATABASE.port;
    private readonly database: string = process.env.DB_NAME || DATABASE.database;
    private readonly username: string = process.env.DB_USER || DATABASE.username;
    private readonly password: string = process.env.DB_PASS || DATABASE.password;
    public postgreURL: string;
    public client;

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        if (process.env.NODE_ENV !== "test") {
            // Use standard database connexion when not in unittest mode
            this.postgreSetup();
        }
    }

    /** @returns {void} */
    private config(): void {
        // Allow Maximum of 5Mo files and json data to be uploaded on the server for one request
        this.app.use(express.urlencoded({ limit: "5mb", extended: true }));
        this.app.use(express.json({ limit: "5mb" }));
        this.app.use(cookieParser());
        this.app.use(logger("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(expressValidator());
        this.app.use(Auth.config().initialize());
 
        this.corsControl();
 
        // serving static files
        this.app.use(express.static("public"));
    }
 
    /**
     * postgreSetup
     *
     * Activates connexion with the PostgreSQLDB database
     *
     * @returns {void}
     */
    private postgreSetup(): void {
        this.postgreUrl();
        this.client = new Sequelize(this.postgreURL);
        const db: any = {};
        fs.readdirSync(__dirname + "/models").filter((file) => {
            let extension = ".js";
            if (process.env.NODE_ENV === "dev") {
                extension = ".ts";
            }
            return (file.indexOf(".") !== 0) && (file.indexOf("index") !== 0) && (file.slice(-3) === `${extension}`);
        }).forEach((file) => {
            const Models = require(path.join(__dirname + "/models", file.slice(0, -3)));
            const model = Models.default(this.client, DataTypes);
            db[model.getClass()] = model;
        });
 
        Object.keys(db).forEach((modelName) => {
            if (db[modelName].associate) {
                db[modelName].associate(db);
            }
        });
 
        this.client.sync({ force: false }).then((result) => {
            Utils.logger("info", `2TCORP API [postgreSetup] => Syncronization with database model successfull`);
        }).catch((err) => {
            Utils.logger("info", `2TCORP API [postgreSetup] => Syncronization with database model failed`, err);
        });
    }
 
    public close() {
        return this.client.end();
    }
    /**
     * postgreUrl
     *
     * construct the postgre connexion driver string
     *
     * @returns {string}
     */
    private postgreUrl(): string {
        switch (ip.address()) {
            // case DEV_IP:
            // Utils.logger("info", `Will connect to database host ${this.hostDev} for Hosted dev environment`);
            // this.postgreURL = `${this.driver}+srv://${this.username}:${encodeURI(this.password)}@${this.hostDev}/${this.database}`;
            // break;
            case RECETTE_IP:
                Utils.logger("info", `Will connect to database host ${this.hostRecette} for recette environment`);
                this.postgreURL = `${this.driver}://${this.username}:${this.password}@${this.hostRecette}/${this.database}`;
                break;
            case PROD_IP:
                Utils.logger("info", `Will connect to database host ${this.host} for production environment`);
                this.postgreURL = `${this.driver}://${this.username}:${this.password}@${this.host}/${this.database}`;
                break;
            default:
                Utils.logger("info", `Will connect to database host ${this.host} for local/dev environment`);
                if (process.env.DB_HOST === "127.0.0.1" || process.env.DB_HOST === "localhost") {
                    this.postgreURL = `${this.driver}://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}`;
                } else {
                    this.postgreURL = `${this.driver}://${this.username}:${this.password}@${this.hostRecette}/${this.database}`;
                }
                break;
        }
 
        return this.postgreURL;
    }
}
 
export default new App().app;
import * as express from "express";
import * as fs from "fs";
import * as dotenv from "dotenv";
import * as ip from "ip";
import * as compression from "compression";
import * as logger from "morgan";
import * as helmet from "helmet";
import * as cookieParser from "cookie-parser";
import * as expressValidator from "express-validator";
import { CONFIG_PATH, BASE_URI, DEV_IP, RECETTE_IP, PROD_IP } from "./constant";
import { Utils } from "./core/utils";
import { AppRoutes } from "../lib/routes/app.routes";
const { Client } = require('pg');
import { Sequelize, DataTypes } from "sequelize";
import * as path from "path";
import Auth from "./core/auth";
 
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

    
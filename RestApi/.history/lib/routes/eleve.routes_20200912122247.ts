import { Application } from "express";
import { EleveController } from "../controllers/eleve.controller";
import { BASE_URI } from "../constants";

export class EleveRoutes {
    public EleveController: EleveController;

/**
 *
 * @param {Application} app
 * @returns {void}
 * @export
 * @class EleveRoutes
 */
public routes(app: Application): void {

    app.route(`${BASE_URI}/eleve`).post(this.EleveController.AddNewEleve);
    app.route(`${BASE_URI}/eleve/getAll`).get(this.EleveController.getEleves);
    app.route(`${BASE_URI}/eleve/getOne/:`)
}
}
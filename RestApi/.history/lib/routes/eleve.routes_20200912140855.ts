import { Application } from "express";
import { EleveController } from "../controllers/eleve.controller";
import { BASE_URI } from "../constants";

export class EleveRoutes {
    public EleveController: EleveController = new ;

/**
 *
 * @param {Application} app
 * @returns {void}
 * @export
 * @class EleveRoutes
 */
public routes(app: Application): void {

    // app.route(`${BASE_URI}/eleve`).post(this.EleveController.AddNewEleve);
    app.route(`${BASE_URI}/eleve/getAll`).get(this.EleveController.getEleves);
    app.route(`${BASE_URI}/eleve/getOne/:id`).get(this.EleveController.getEleveById);
    app.route(`${BASE_URI}/eleve/update/:id`).put(this.EleveController.updateEleve);
    app.route(`${BASE_URI}/eleve/delete/:id`).delete(this.EleveController.deleteStudent);
}
}
import { Application } from "express";
import { EleveController } from "../controllers/eleve.controller";
import { BASE_URI } from "../constants";

export class EleveRoutes {
    public eleveController: EleveController = new EleveController;

/**
 *
 * @param {Application} app
 * @returns {void}
 * @export
 * @class EleveRoutes
 */
public routes(app: Application): void {

    app.route(`${BASE_URI}/eleve`).post(this.eleveController.AddNewEleve);
    app.route(`${BASE_URI}/eleve/getAll`).get(this.eleveController.getEleves);
    app.route(`${BASE_URI}/eleve/getOne/:id`).get(this.eleveController.getEleveById);
    app.route(`${BASE_URI}/eleve/update/:id`).put(this.eleveController.updateEleve);
    app.route(`${BASE_URI}/eleve/delete/:id`).delete(this.eleveController.deleteStudent);
}
}
import { EleveRoutes } from "./eleve.routes";

export class AppRoutes {

    public EleveRoutes: EleveRoutes = new EleveRoutes();

/**
 *
 * @param {any} app
 * @returns {void}
 * @class AppRoutes
 */
public routes(app): void {
    this.EleveRoutes()
}
}

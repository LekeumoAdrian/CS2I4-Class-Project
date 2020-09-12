import { Request, Response } from "express";
import * as _ from "lodash";
import * as validator from "validator";
import Handlers from "../core/handlers";
import { Utils } from "../core/utils";

const model = require("../models");

export class EleveController {
/**
 *Function to add a new eleve in the system
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
public async AddNewEleve(req: Request, res: Response): Promise<Response> {
    let oErr;
    let eleveData;

    Utils.logger("info", `User requested to add a new Eleve...`);
    try {
        const newEleve = await model.Eleve.create(req.body).
        then((eleve) =>
        res.status(201).json({
            code: `201`,
            status: `created`,
            message: `Your `
        })

        )
    }
}
}
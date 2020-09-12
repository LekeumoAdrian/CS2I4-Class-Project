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
			message: `Your Student has been created successfully`,
			eleve,
		})
		).catch(_.partial(Handlers.onError, res, "Error insering student"));
	} catch (error) {
		oErr = Utils.getErrObj(error, "AddNewEleve");
		res.status(oErr.code).send(oErr.msg);
	}
}

/**
 * Function to get all the student in the system
 *
 * @param {Request} req
 * @param {Response} res
 * @return {Promise<Response>}
 */
public async getEleves( req: Request, res: Response): Promise<Response> {
 let oErr;

 Utils.logger("info", `User request to get all students ...`);

 try {
	 const eleve = await model.Eleve.findAll({
		 attributes: [
			 "id",
			 "nom",
			 "prenom",
			 "date_naiss",
			 "sexe",
			 "id_class",
		 ],
	 })
	 .catch(_.partial(Handlers.onError, res, "Error fetching all the students"));
 } catch (error) {
		oErr = Utils.getErrObj(error, "getStudents");
		res.status(oErr.code).send(oErr.msg);
	}
	}
/**
 *Function to get one student
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
public async getEleveById ( req: Request, res: Response): Promise<Response> {
	let oErr;

	Utils.logger("info", `User requested to get one Studend ...`);
	try {
		const eleve = await model.Eleve.findOne({
			where: {
				id: req.params.id
			},
		}).then((eleve) =>
		res.status(200).send({
			code: `200`,
			message: `Request successfull`,
			eleve
		})
		)
		.catch(_.partial(Handlers.onError, res, "Error fetching a property")); 
	} catch (error) {
		oErr = Utils.getErrObj(error, "get")
	}
}
}


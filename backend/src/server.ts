import express from "express";
import path from "path";
import cors from "cors";

import "express-async-errors"; // shows erros during api response async-await

import "./database/connection";

import routes from "./routes";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(3333);

/**
 * Driver nativo: usa query SQL comuns (SELECT * FROM users)
 * Query builder: usa JS, knex
 * ORM (Object Relational Mapping): relação de objetos e classes com as tabelas do banco de dados
 */

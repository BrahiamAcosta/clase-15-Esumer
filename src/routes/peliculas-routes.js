import express from "express";
import validarDatos from "../middleware/validar-peliculas.js";
import * as peliculasController from "../controllers/peliculas-controller.js";

const router = express.Router();

router.get("/peliculas", peliculasController.consultarPeliculas);

router.get("/peliculas/:id", peliculasController.consultarPeliculaPorId);

router.post("/peliculas", validarDatos, peliculasController.crearPelicula);

router.patch("/peliculas/:id", peliculasController.actualizarPelicula);

router.delete("/peliculas/:id", peliculasController.eliminarPelicula);

export default router;

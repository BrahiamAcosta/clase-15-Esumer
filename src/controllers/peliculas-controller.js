import {
  consultarPeliculasService,
  consultarPeliculaPorIdService,
  crearPeliculaService,
  actualizarPeliculaService,
  eliminarPeliculaService,
} from "../services/peliculas-service.js";

function consultarPeliculas(req, res) {
  const resultado = consultarPeliculasService(req.query);
  res.json(resultado);
}

function consultarPeliculaPorId(req, res) {
  const resultado = consultarPeliculaPorIdService(Number(req.params.id));
  if (!resultado) {
    res.status(404).json({ error: "Película no encontrada" });
  }
  res.json(resultado);
}

function crearPelicula(req, res) {
  const resultado = crearPeliculaService(req.body);
  res.status(201).json(resultado);
}

function actualizarPelicula(req, res) {
  const id = Number(req.params.id);
  const datos = req.body;
  const resultado = actualizarPeliculaService(id, datos);

  if (!resultado) {
    return res.status(404).json({ error: "Película no encontrada" });
  }
  res.json(resultado);
}

function eliminarPelicula(req, res) {
  const id = Number(req.params.id);
  const resultado = eliminarPeliculaService(id);

  if (!resultado) {
    return res.status(404).json({ error: "Película no encontrada" });
  } else {
    res.json({ message: "Película eliminada correctamente" });
  }
}

export {
  consultarPeliculas,
  consultarPeliculaPorId,
  crearPelicula,
  actualizarPelicula,
  eliminarPelicula,
};

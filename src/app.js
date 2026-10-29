import peliculas from "./data/peliculas.js";
import express from "express";

const app = express();
app.use(express.json());

function validarDatos(req, res, next) {
  const { nombre, genero, anio } = req.body;
  if (!nombre || !genero || !anio) {
    return res
      .status(400)
      .json({ error: "El nombre, el género y el año son obligatorios" });
  }
  next();
}

app.get("/peliculas", (req, res) => {
  const { nombre, genero, anio } = req.query;
  let peliculasFiltradas = peliculas;

  if (nombre) {
    peliculasFiltradas = peliculasFiltradas.filter((p) => {
      return p.nombre.toLowerCase().includes(nombre.toLowerCase());
    });
  }
  if (genero) {
    peliculasFiltradas = peliculasFiltradas.filter((p) => {
      return p.genero.toLowerCase().includes(genero.toLowerCase());
    });
  }
  if (anio) {
    peliculasFiltradas = peliculasFiltradas.filter((p) => {
      return p.anio >= Number(anio);
    });
  }

  res.json(peliculasFiltradas);
});

app.get("/peliculas/:id", (req, res) => {
  const id = Number(req.params.id);
  const pelicula = peliculas.find((p) => p.id === id);

  if (!pelicula) {
    res.status(404).json({ error: "Película no encontrada" });
  }
  res.json(pelicula);
});

app.post("/peliculas", validarDatos, (req, res) => {
  const { nombre, genero, anio } = req.body;

  const nuevaPelicula = {
    id: peliculas.length + 1,
    nombre,
    genero,
    anio,
  };

  peliculas.push(nuevaPelicula);

  res.status(201).json(nuevaPelicula);
});

app.patch("/peliculas/:id", (req, res) => {
  const id = Number(req.params.id);
  const pelicula = peliculas.find((p) => p.id === id);

  if (!pelicula) {
    return res.status(404).json({ error: "Película no encontrada" });
  }

  const { nombre, genero, anio } = req.body;

  if (nombre) pelicula.nombre = nombre;
  if (genero) pelicula.genero = genero;
  if (anio) pelicula.anio = anio;

  res.json(pelicula);
});

app.delete("/peliculas/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = peliculas.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Película no encontrada" });
  }

  peliculas.splice(index, 1);

  res.status(204).send();
});

app.listen(3000, () =>
  console.log("Servidor escuchando en http://localhost:3000"),
);

import peliculas from "../data/peliculas.js";

function consultarPeliculasService(filtros) {
  const { nombre, genero, anio } = filtros;
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

  return peliculasFiltradas;
}

function consultarPeliculaPorIdService(id) {
  const pelicula = peliculas.find((p) => p.id === id);
  if (!pelicula) {
    return false;
  }
  return pelicula;
}

function crearPeliculaService(datos) {
  const { nombre, genero, anio } = datos;

  const nuevaPelicula = {
    id: peliculas.length + 1,
    nombre,
    genero,
    anio,
  };

  peliculas.push(nuevaPelicula);

  return nuevaPelicula;
}

function actualizarPeliculaService(id, datos) {
  const pelicula = peliculas.find((p) => p.id === id);

  if (!pelicula) {
    return false;
  }

  const { nombre, genero, anio } = datos;
  if (nombre) pelicula.nombre = nombre;
  if (genero) pelicula.genero = genero;
  if (anio) pelicula.anio = anio;

  return pelicula;
}

function eliminarPeliculaService(id) {
  const index = peliculas.findIndex((p) => p.id === id);

  if (index === -1) {
    return false;
  }

  peliculas.splice(index, 1);
  return true;
}

export {
  consultarPeliculasService,
  consultarPeliculaPorIdService,
  crearPeliculaService,
  actualizarPeliculaService,
  eliminarPeliculaService,
};

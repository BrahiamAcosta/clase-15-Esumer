function validarDatos(req, res, next) {
  const { nombre, genero, anio } = req.body;
  if (!nombre || !genero || !anio) {
    return res
      .status(400)
      .json({ error: "El nombre, el género y el año son obligatorios" });
  }
  next();
}

export default validarDatos;

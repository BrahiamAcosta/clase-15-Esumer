import usuarios from "../data/usuarios.js";

function consultarUsuariosService(filtros) {
  const { nombre, correo, rol } = filtros;

  let usuariosFiltrados = usuarios;

  if (nombre) {
    usuariosFiltrados = usuariosFiltrados.filter((usuario) => {
      return usuario.nombre.toLowerCase().includes(nombre.toLowerCase());
    });
  }

  if (correo) {
    usuariosFiltrados = usuariosFiltrados.filter((usuario) => {
      return usuario.correo.toLowerCase().includes(correo.toLowerCase());
    });
  }

  if (rol) {
    usuariosFiltrados = usuariosFiltrados.filter((usuario) => {
      return usuario.rol.toLowerCase().includes(rol.toLowerCase());
    });
  }
  return usuariosFiltrados;
}

function crearUsuarioService(datos) {
  const { nombre, correo, rol } = datos;
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    correo,
    rol,
    activo: true,
  };
  usuarios.push(nuevoUsuario);
  return nuevoUsuario;
}

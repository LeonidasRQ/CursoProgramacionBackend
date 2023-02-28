import UserManager from "./UserManager.js";

const env = async () => {
  const manager = new UserManager();

  const usuario = {
    nombre: "Miguel",
    apellido: "Fonseca",
    nombreUsuario: "MGFonseca",
    contrasena: "123",
  };

  await manager.crearUsuario(usuario);

  let consulta = await manager.consultarUsuarios();
  console.log(consulta);

  await manager.validarUsuario("MGFonseca", "123");
};

env();

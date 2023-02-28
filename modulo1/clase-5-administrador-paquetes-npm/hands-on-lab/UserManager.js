import fs from "fs";
import crypto from "crypto";

export default class UserManager {
  constructor() {
    this.path = "./files/Usuarios.json";
  }

  consultarUsuarios = async () => {
    if (fs.existsSync(this.path)) {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const usuarios = JSON.parse(data);
      return usuarios;
    } else {
      return [];
    }
  };

  crearUsuario = async (usuario) => {
    const usuarios = await this.consultarUsuarios();

    // Hashear la contrasena
    usuario.salt = crypto.randomBytes(128).toString("base64");
    usuario.contrasena = crypto
      .createHmac("sha256", usuario.salt)
      .update(usuario.contrasena)
      .digest("hex"); // Esta era la linea de codigo que faltaba por agregar para que la contraseña se guardara correctamente!

    usuarios.push(usuario);
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(usuarios, null, "\t")
    );
    return usuario;
  };

  validarUsuario = async (nombreUsuario, contrasena) => {
    const usuarios = await this.consultarUsuarios();
    const indiceUsuario = usuarios.findIndex(
      (usuario) => usuario.nombreUsuario === nombreUsuario
    );
    if (indiceUsuario === -1) {
      console.log("Error, el usuario no existe");
      return;
    }

    const usuario = usuarios[indiceUsuario];

    const newHash = crypto
      .createHmac("sha256", usuario.salt)
      .update(contrasena)
      .digest("hex");

    if (newHash === usuario.contrasena) {
      console.log("Loggueado");
    } else {
      console.log("Contraseña errona");
    }
  };
}

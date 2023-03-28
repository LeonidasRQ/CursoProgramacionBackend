import fs from "fs";

export default class ManagerUsuarios {
  constructor() {
    this.path = "./files/Usuarios.json";
  }
  consultarUsuarios = async () => {
    if (fs.existsSync(this.path)) {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const result = JSON.parse(data);
      console.log(result);
      return result;
    } else {
      return [];
    }
  };

  crearUsuario = async (usuario) => {
    const usuarios = await this.consultarUsuarios();
    if (usuarios.length === 0) {
      usuario.id = 1;
    } else {
      usuario.id = usuarios[usuarios.length - 1].id + 1;
    }
    usuarios.push(usuario);
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(usuarios, null, "\t")
    );
    return usuario;
  };
}

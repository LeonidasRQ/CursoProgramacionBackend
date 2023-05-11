import { Command } from "commander";

const program = new Command();

program
  .option("-d", "variable para debug", false) // flag, descripción, valor por defecto
  .option("-p <port>", "puerto del servidor", 8080)
  .option("--mode <mode>", "modo de trabajo", "production");

program.parse();

console.log(program.opts());

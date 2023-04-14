import { readFileSync } from "fs";
import path from "path";

export const CRIPTOS = JSON.parse(readFileSync(path.join(__dirname, "api.json")).toString());

export const MONEDAS = [
  { codigo: "USD", nombre: "Dolar de Estados Unidos" },
  { codigo: "MXN", nombre: "Peso Mexicano" },
  { codigo: "EUR", nombre: "Euro" },
  { codigo: "GBP", nombre: "Libra Esterlina" },
];

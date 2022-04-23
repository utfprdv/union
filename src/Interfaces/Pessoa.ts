import { Curso } from "./Curso";

export interface Pessoa {
  id: string;
  nome: string;
  image: string;
  bio?: string;
  email?: string;
  telefone?: string;
  curso: Curso;
}

import { Curso } from "Interfaces/Curso";
import { Pessoa } from "Interfaces/Pessoa";

export type PostProps = {
  post: {
    published: string;
    owner: Pessoa & { curso: Curso };
    content: string;
  };
};

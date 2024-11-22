import { livro } from "../types/types";
import api from "./api";

export const getLivro = async (): Promise<livro[]> => {
  const { data } = await api.get<livro[]>("/livros");
  return data;
};
export const createLivro = async (
  novoLivro: Omit<livro, "id">
): Promise<livro> => {
  const { data } = await api.post<livro>("/livros", novoLivro);
  return data;
};

export const deleteLivro = async (id: number): Promise<livro> => {
  const { data } = await api.delete<livro>("/livros/" + id);
  return data;
};

export const updateLivro = async (
  id: number,
  livroEditado: livro
): Promise<livro> => {
  const { data } = await api.put<livro>("/livros/" + id, livroEditado);
  return data;
};
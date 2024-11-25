import { livro } from "../types/types";
import api from "./api";

export const getLivro = async (): Promise<livro[]> => {
  const { data } = await api.get<livro[]>("/Livros");
  return data;
};
export const createLivro = async (
  novoLivro: Omit<livro, "id">
): Promise<livro> => {
  const { data } = await api.post<livro>("/Livros", novoLivro);
  return data;
};

export const deleteLivro = async (id: number): Promise<void> => {
  await api.delete(`/Livros/${id}`);
};

export const updateLivro = async (
  id: number,
  livroEditado: livro
): Promise<livro> => {
  const { data } = await api.put<livro>("/Livros/" + id, livroEditado);
  return data;
};
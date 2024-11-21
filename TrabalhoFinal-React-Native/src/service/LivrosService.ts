import { livro } from "../types/types";
import api from "./api";

export const buscarLivro = async (): Promise<livro[]> => {
  try {
    const { data } = await api.get<livro[]>("/livros");
    return data;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    throw error;
  }
};
export const createLivro = async (
  novoLivro: Omit<livro, "id">
): Promise<livro> => {
  try {
    const { data } = await api.post<livro>("/livros", novoLivro);
    return data;
  } catch (error) {
    console.error("Erro ao criar livro:", error);
    throw error;
  }
};
export const deleteLivro = async (id: number): Promise<void> => {
  try {
    await api.delete(`/livros/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar o livro com ID ${id}:`, error);
    throw error;
  }
};
export const updateLivro = async (
  id: number,
  livroEditado: livro
): Promise<livro> => {
  try {
    const { data } = await api.put<livro>(`/livros/${id}`, livroEditado);
    return data;
  } catch (error) {
    console.error(`Erro ao atualizar o livro com ID ${id}:`, error);
    throw error;
  }
};

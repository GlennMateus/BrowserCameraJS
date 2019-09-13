import axios from "axios";

// API mp
export const apimp = axios.create({
  baseURL: "https://menorpreco.notaparana.pr.gov.br/api/v1/"
});

export const api = axios.create({
  baseURL: "https://menorpreco.notaparana.pr.gov.br/api/v1/"
});

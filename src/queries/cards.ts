import axios from "axios";

const CARDS_URL = "https://api.magicthegathering.io/v1/cards";

export const cardQuery = async (params: string): Promise<CardResponse[]> => {
  return axios.get(CARDS_URL + (params ?? "")).then((res) => res.data.cards);
};

export const getOneCard = async (id: string) => {
  return await axios.get(CARDS_URL + `?id=${id}`).then((res) => res.data.cards);
};

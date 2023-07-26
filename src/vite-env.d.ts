/// <reference types="vite/client" />
declare module "mtgsdk";

interface IRadioGroup {
  name: string;
  control: Control<FieldValues> | undefined;
  options: string[];
  defaultValue?: string;
}

interface IFormCheckbox {
  name: string;
  control: Control<FieldValues> | undefined;
  label: string;
}

type ForeignCard = {
  name: string;
  text: string;
  type: string;
  flavor: string;
  imageUrl: string;
  language: string;
  multiverseid: number;
};

type Legality = {
  format: string;
  legality: string;
};

interface CardResponse {
  name: string;
  manaCost: string;
  cmc: number;
  colors: string[];
  colorIdentity: string[];
  type: string;
  types: string[];
  subtypes: string[];
  rarity: string;
  set: string;
  setName: string;
  text: string;
  flavor: string;
  artist: string;
  number: string;
  power: string;
  toughness: string;
  layout: string;
  multiverseid: string;
  imageUrl: string;
  foreignNames: ForeignCard[];
  printings: string[];
  originalText: string;
  originalType: string;
  legalities: Legality[];
  id: string;
}

interface CardsRequest {
  queryStr: string
  searchByName: boolean
  searchByType: boolean
  searchByText: boolean
}
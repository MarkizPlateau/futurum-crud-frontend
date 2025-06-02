import { Status } from "@/types/campaign";

export const TOWN_OPTIONS = [
  "Białystok",
  "Bydgoszcz",
  "Gdańsk",
  "Gorzów Wielkopolski",
  "Katowice",
  "Kielce",
  "Kraków",
  "Lublin",
  "Łódź",
  "Olsztyn",
  "Opole",
  "Poznań",
  "Rzeszów",
  "Szczecin",
  "Toruń",
  "Warszawa",
  "Wrocław",
  "Zielona Góra",
];

export const KEYWORD_SUGGESTIONS = [
  "nowość",
  "promocja",
  "eco",
  "najlepsza cena",
  "rabat",
  "darmowa dostawa",
  "bestseller",
  "hit sezonu",
  "wyprzedaż",
  "limitowana edycja",
  "super okazja",
  "megapromocja",
  "must have",
  "oferta specjalna",
  "exclusive",
  "eco-friendly",
  "lokalnie",
  "handmade",
  "produkt premium",
  "limited edition",
  "hot deal",
  "black friday",
  "new arrival",
  "top seller",
  "recommended",
  "bestseller tygodnia",
  "nowa kolekcja",
  "exclusive offer",
  "top rated",
  "eco choice",
];

export const CAMPAIGN_BUDGET = 4000;
export const MIN_BID = 5;
export const MIN_FUND = MIN_BID * 20;
export const CURRENCY = "PLN";

export const FORM_INITIAL_VALUES = {
  name: "",
  keywords: [],
  picture: undefined,
  bid: MIN_BID,
  fund: MIN_FUND,
  status: Status.ON,
  town: undefined,
  radius: 1,
};

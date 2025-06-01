export enum Town {
  Białystok = "Białystok",
  Bydgoszcz = "Bydgoszcz",
  Gdańsk = "Gdańsk",
  GorzówWielkopolski = "Gorzów Wielkopolski",
  Katowice = "Katowice",
  Kielce = "Kielce",
  Kraków = "Kraków",
  Lublin = "Lublin",
  Łódź = "Łódź",
  Olsztyn = "Olsztyn",
  Opole = "Opole",
  Poznań = "Poznań",
  Rzeszów = "Rzeszów",
  Szczecin = "Szczecin",
  Toruń = "Toruń",
  Warszawa = "Warszawa",
  Wrocław = "Wrocław",
  ZielonaGóra = "Zielona Góra",
}

export enum Status {
  ON = "on",
  OFF = "off",
}

export class Campaign {
  "id": string;
  "name": string;
  "keywords": string[];
  "bid": number;
  "fund": number;
  "status": Status;
  "town"?: Town;
  "radius": number;
}

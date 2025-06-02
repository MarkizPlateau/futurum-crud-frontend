import { Status, Town } from "@/types/campaign";

export const MOCKS = {
  INITIAL_DATA: [
    {
      name: "Nice",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Nice_from_Castle_Hill_01.jpg/960px-Nice_from_Castle_Hill_01.jpg",
      keywords: ["eco-friendly", "limited edition", "produkt premium"],
      bid: 5,
      fund: 999.97,
      status: Status.OFF,
      town: Town.Kraków,
      radius: 200,
      id: "6750e022-7240-44e3-b55b-b7d25ff15849",
    },
    {
      name: "Neutral",
      picture:
        "https://pix4free.org/assets/library/2021-06-16/originals/neutral.jpg",
      keywords: ["darmowa dostawa", "wyprzedaż"],
      bid: 50,
      fund: 557,
      status: Status.ON,
      town: Town.Gdańsk,
      radius: 20,
      id: "457b8b03-270c-4ef3-93a3-8143e45906a9",
    },
  ],
  INITIAL_BUDGET: 2443.03,
};

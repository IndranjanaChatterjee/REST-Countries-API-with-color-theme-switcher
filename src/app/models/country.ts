export interface Country {
  name: string;
  alpha2Code: string;
  capital: string;
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
}

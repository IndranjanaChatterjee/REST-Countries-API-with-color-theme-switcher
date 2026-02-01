export interface Country {
  name: string;
  alpha2Code: string;
  capital: string;
  region: string;
  population: number;
  nativeName:string;
  topLevelDomain:string[];
  currencies:Currency[];
  languages:Languages[];
  alpha3Code:string;
  borders:string[];
  flags: {
    png: string;
    svg: string;
  };
}
export interface Currency {
  code: string;
  name: string;
  symbol: string;
}
export interface Languages{
  iso639_1:string;
  iso639_2:string;
  name:string;
  nativeName:string;
}

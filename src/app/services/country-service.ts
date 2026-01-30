import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private url="data/data.json";
  constructor(private http:HttpClient){}
  getCountries(){
    return this.http.get<Country[]>(this.url);
  }


  getCountryByAlpha2Code(alpha2Code:string){
    return this.http.get<Country[]>(this.url).pipe(
      map(countries => countries.find(country => country.alpha2Code === alpha2Code))
    );
  }
  
}

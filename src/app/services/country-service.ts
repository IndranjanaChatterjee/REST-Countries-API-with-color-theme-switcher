import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Country } from '../models/country';
import { map, tap,of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private countriesCache: Country[] | null = null;

  private url="data/data.json";
  getCountries(){
    if (this.countriesCache) {
    return of(this.countriesCache); // ← instant, no HTTP
  }
    return this.http.get<Country[]>(this.url).pipe(
      tap((countries) => (this.countriesCache = countries))
    );
  }


  getCountryByAlpha2Code(alpha2Code: string) {
  return this.getCountries().pipe(
    map(countries =>
      countries.find(country => country.alpha2Code === alpha2Code)
    )
  );
}

getBorderCountryNames(borderCodes: string[]) {
    return this.getCountries().pipe(
      map(countries =>
        borderCodes
          .map(code =>
            countries.find(c => c.alpha3Code === code)?.name
          )
          .filter((name): name is string => !!name)
      )
    );
  }

  
}

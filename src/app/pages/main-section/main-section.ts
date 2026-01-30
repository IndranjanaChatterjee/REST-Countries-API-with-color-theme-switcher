import { Component } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-main-section',
  imports: [],
  templateUrl: './main-section.html',
  styleUrl: './main-section.css',
})
export class MainSection {
  countries: Country[] = [];
  isLoading: boolean = true;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
      console.log(this.countries);
    });
  }
}

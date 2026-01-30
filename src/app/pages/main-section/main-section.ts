import { Component, inject, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-main-section',
  imports: [],
  templateUrl: './main-section.html',
  styleUrl: './main-section.css',
})
export class MainSection implements OnInit {
  countries: Country[] = [];
  isLoading = true;

  
  private countryService = inject(CountryService);;

  ngOnInit() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
      console.log(this.countries);
    });
  }
}

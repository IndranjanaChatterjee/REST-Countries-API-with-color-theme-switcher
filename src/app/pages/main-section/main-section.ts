import { Component, inject, OnInit, signal } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country-service';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-main-section',
  imports: [RouterLink,Header],
  templateUrl: './main-section.html',
  styleUrl: './main-section.css',
})
export class MainSection implements OnInit {
  countries: Country[] = [];
  isLoading = signal(true);

  
  private countryService = inject(CountryService);;

  ngOnInit() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
      this.isLoading.set(false);
      console.log(this.countries);
    });
  }
}

import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country-service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-main-section',
  imports: [RouterLink],
  templateUrl: './main-section.html',
  styleUrl: './main-section.css',
})
export class MainSection implements OnInit {
  countries = signal<Country[]>([]);
  isLoading = signal(true);
  searchTerm = signal('');

  
  private countryService = inject(CountryService);;
  filteredCountries = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();

    if (!term) return this.countries();

    return this.countries().filter(country =>
      country.name.toLowerCase().includes(term)
    );
  });

  ngOnInit() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries.set(data);
      this.isLoading.set(false);
      console.log(this.countries);
    });
  }

  onSearch(value: string) {
    this.searchTerm.set(value);
  }
}

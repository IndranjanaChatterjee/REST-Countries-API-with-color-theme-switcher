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
  selectedRegion = signal<string | null>(null);

  private countryService = inject(CountryService);
  filteredCountries = computed(() => {
    let result = this.countries();

    const term = this.searchTerm().toLowerCase().trim();
    const region = this.selectedRegion();

    // 🔍 Search filter
    if (term) {
      result = result.filter((country) => country.name.toLowerCase().includes(term));
    }

    // 🌍 Region filter
    if (region) {
      result = result.filter((country) => country.region === region);
    }

    return result;
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

  onRegionChange(event: Event) {
    const select = event.target as HTMLSelectElement | null;
    const value = select?.value ?? '';  // '' indicates 
    this.selectedRegion.set(value || null);
  }

  // trackBy to avoid re-rendering list items unnecessarily
  trackByCode(index: number, country: Country) {
    return country.alpha2Code || index;
  }
}

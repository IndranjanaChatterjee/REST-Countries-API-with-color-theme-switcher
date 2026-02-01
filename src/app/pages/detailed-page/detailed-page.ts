import { Component, inject, OnInit, signal } from '@angular/core';
import { Country } from '../../models/country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-detailed-page',
  imports: [],
  templateUrl: './detailed-page.html',
  styleUrl: './detailed-page.css',
})
export class DetailedPage implements OnInit {
  country?: Country;
  private route =inject(ActivatedRoute);
  private router=inject(Router);
  private countryService = inject(CountryService);
  isLoading = signal(true);
  borderCountries = signal<string[]>(['NA']);
  ngOnInit() {  // Lifecycle hook that is called after data-bound properties of a directive are initialized
    const code = this.route.snapshot.paramMap.get('countryCode');  // Get the country code from the route parameters
    if(!code) return;
    this.countryService.getCountryByAlpha2Code(code).subscribe((data) => {  // data refers to the country found
      if(data)
      {
        this.country = data;
        console.log(this.country);
        if (this.country?.borders?.length) {
        this.countryService
          .getBorderCountryNames(this.country.borders)
          .subscribe(names => this.borderCountries.set(names));
      }

      }
      this.isLoading.set(false);
      
    });
  }
  goBack() {
    this.router.navigate(['/']);
  }


  

}

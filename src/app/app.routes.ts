import { Routes } from '@angular/router';
import { MainSection } from './pages/main-section/main-section';
import { DetailedPage } from './pages/detailed-page/detailed-page';

export const routes: Routes = [
  { path: '', component: MainSection },
  {
    path: 'detail/:countryCode',
    component: DetailedPage,
  },
  {
    path:'**', redirectTo:'', pathMatch:'full' // Wildcard route for a 404 page can be added here
  }
];

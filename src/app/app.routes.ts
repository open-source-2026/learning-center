import { Routes } from '@angular/router';
import { Home } from './shared/presentation/views/home/home';

const baseTitle = 'ACME Learning Center';
const about = () =>
  import('./shared/presentation/views/about/about').then(m => m.About);


export const routes: Routes = [

  { path: 'home', component: Home, title: `${baseTitle} - Home` },


  // Se aplica cuando el componente es cargado de manera perezosa (lazy loading)
  { path: 'about', loadComponent: about, title: `${baseTitle} - About` }
];

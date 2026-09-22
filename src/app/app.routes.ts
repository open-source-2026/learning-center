import { Routes } from '@angular/router';
import { Home } from './shared/presentation/views/home/home';

const baseTitle = 'ACME Learning Center';

export const routes: Routes = [

  { path: 'home', component: Home, title: `${baseTitle} - Home` },


];

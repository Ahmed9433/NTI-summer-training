import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import { NotFound } from './features/pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: '**', component: NotFound },
];

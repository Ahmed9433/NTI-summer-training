import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import { About } from './features/pages/about/about';
import { Contact } from './features/pages/contact/contact';
import { NotFound } from './features/pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFound },
];

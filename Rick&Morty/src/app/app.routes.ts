import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list-component/character-list-component';

export const routes: Routes = [
  // STEP1: ruta que navega al componente de la lista de personajes
  { path: 'character-list', component: CharacterListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/character-list' },
];

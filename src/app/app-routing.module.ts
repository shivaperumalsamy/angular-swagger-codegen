import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsStatusComponent } from './components/pets-status/pets-status.component';

const routes: Routes = [
  { path: 'pets', component: PetsStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

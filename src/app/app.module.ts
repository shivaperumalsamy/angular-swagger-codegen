import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsStatusComponent } from './components/pets-status/pets-status.component';
import { PetsStatusService } from './services/pets-status.service'
import { PetService } from './client';

@NgModule({
  declarations: [
    AppComponent,
    PetsStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PetsStatusService,
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

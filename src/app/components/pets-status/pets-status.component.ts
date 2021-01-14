import { Component, OnInit } from '@angular/core';
import { PetsStatusService } from 'src/app/services/pets-status.service';
import { Pet } from 'src/app/client';


@Component({
  selector: 'app-pets-status',
  templateUrl: './pets-status.component.html',
  styleUrls: ['./pets-status.component.css']
})
export class PetsStatusComponent implements OnInit {

  pets: Array<Pet>;

  constructor(
    private petsStatusService: PetsStatusService
  ) { }

  ngOnInit(): void { 
    this.getPets()
   }

    async getPets() {
      this.pets = await this.petsStatusService.getPets();
    }

}

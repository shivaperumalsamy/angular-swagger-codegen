import { Injectable } from '@angular/core';
import { PetService } from '../client';

@Injectable({
  providedIn: 'root'
})
export class PetsStatusService {

  constructor(
    private petService: PetService
  ) { }

  async getPets() {
    let result = await this.petService.listPets().toPromise(); 
    console.log(result)
    return result;
  }

}

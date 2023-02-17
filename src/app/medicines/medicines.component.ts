import { Component } from '@angular/core';
import { Medicine } from './medicine';
import { MedicineService } from './medicine.service';
import { MEDICINES } from './medicines.json';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html'
})
export class MedicinesComponent {
  medicines : Medicine[] =  [];

  constructor(private medicineService: MedicineService) {

  }

  ngOnInit() {
    
    this.medicineService.getMedicines().subscribe(
      medicines => this.medicines = medicines
    );

  }

}

import { Component } from '@angular/core';
import { Medicine } from './medicine';
import { MedicineService } from './medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  medicine: Medicine = new Medicine();
  constructor(private medicineService: MedicineService, private router:Router){

  }

  ngOnInit() {

  }

  public create():void {
    this.medicineService.create(this.medicine).subscribe(
      response => this.router.navigate(['/medicines'])
    );
  }

}

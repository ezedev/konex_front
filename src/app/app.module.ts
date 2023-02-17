import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicineService } from './medicines/medicine.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './medicines/form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
{path: '', redirectTo:'/medicines', pathMatch: 'full'},
{path: 'medicines', component: MedicinesComponent},
{path: 'medicines/form', component: FormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MedicinesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MedicineService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { MEDICINES } from './medicines.json';
import { Medicine } from './medicine';
import { Observable, of } from 'rxjs';
import {map, catchError,tap} from 'rxjs/operators';
import { HttpClient, HttpRequest ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private urlEndPoint:string="http://localhost:8080/medicine/medicines";
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http:HttpClient) { }

  getMedicines(): Observable<Medicine[]> {

    return this.http.get< Medicine[]>(this.urlEndPoint).pipe(
      map( (response) => response as Medicine[]) //function con return
    );
  }

  create(medicine: Medicine) : Observable<Medicine> {
    return this.http.post<Medicine>(this.urlEndPoint,medicine,{headers: this.httpHeaders})
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICustomer } from '../domain/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private url: string = environment.URL;

  constructor(private http: HttpClient) {};    // Constructor injector


  public getAllCustomers(): Observable<ICustomer[]> {

    return this.http.get<ICustomer[]>(this.url);

   }
}

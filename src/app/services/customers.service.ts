import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  public getCustomersByNameContaining(part: string) : Observable<ICustomer[]> {

    const myparams = new HttpParams().set('namePart', part);
    const myheaders = new HttpHeaders().set('accept', 'application/json');  // Not necessary
    const options =  {params : myparams, headers : myheaders};

    return this.http.get<ICustomer[]>(this.url, options);
  }


  // public getCustomersHavingInName(namePart: string): Observable<ICustomer[]> {
  //   const  params = new HttpParams().set('namePart',namePart);
  //   //const headers = new HttpHeaders().set('Accept', 'application/json');
  //   //const options = { params:params, headers: headers };
  //   //return this.http.get<ICustomer[]>(this.url,  options);
  //   return this.http.get<ICustomer[]>(this.url,  {params: params});

  //  }
}

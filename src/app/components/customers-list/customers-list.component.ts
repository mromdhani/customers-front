import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from 'src/app/domain/icustomer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  data : ICustomer[];

  constructor(private service: CustomersService) { }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe(
       resultat => this.data = resultat ,
       erreur => console.log(`ATTENTION, il y a l'erreur : ${erreur}`)
    );
  }

}

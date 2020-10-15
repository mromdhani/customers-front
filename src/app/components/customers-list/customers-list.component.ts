import { Component, OnInit } from '@angular/core';

import {switchMap} from 'rxjs/operators';

import { ICustomer } from 'src/app/domain/icustomer';
import { CustomersService } from 'src/app/services/customers.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  criteria: string;
  data : ICustomer[];

  constructor(private service: CustomersService,
              private _search: SearchService) { }

  ngOnInit(): void {

      this._search.currentMessage
                  .pipe(switchMap (  // High order RxJS operators
                      item => this.service.getCustomersByNameContaining(item)
                  ))
                  .subscribe(
                      result => this.data = result,
                      err => console.log('ATTENTION, il y a eu l erreur : '+ err)
                  );


      // Récupération du critere de NavBar
      // this._search.currentMessage.subscribe(
      //    msg =>  {
      //              this.criteria = msg ;
      //              // Invoquer le service en passant le critere
      //              this.service.getCustomersByNameContaining(this.criteria).subscribe
      //                 (
      //                   rep => this.data = rep,
      //                   err => console.log(`Attention, il y a eu l 'erreur : ${err}`)
      //                 );
      //             }
      //  );













    // this._search.currentMessage.subscribe(
    //   message => {
    //     this.criteria = message;
    //     this.service.getAllCustomers().subscribe(
    //       resultat => this.data = resultat ,
    //       erreur => console.log(`ATTENTION, il y a l'erreur : ${erreur}`)
    //    );

    //   });
    // this._search.currentMessage
    //     .pipe(switchMap(item => this.service.getCustomersHavingInName(item)))
    //     // tap (msg => console.log("===== Got: "+msg))
    //     .subscribe(
    //       resultat => this.data = resultat ,
    //       erreur => console.log(`ATTENTION, il y a l'erreur : ${erreur}`)
    //     );


  }
}

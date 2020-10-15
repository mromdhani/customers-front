import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    WelcomeComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Required for Routing as a separate module
    NgbModule,  // Required for the NgBootstrap integration
    HttpClientModule,  // Required for HTTP Calls using HttpClient (uses RXJS Observables)
    FormsModule  // Required for the [(ngModel)] in the NavBar component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

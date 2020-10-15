import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private messageSource = new BehaviorSubject<string>("");

  // This is the public Observable on which clients will subscribe
  currentMessage = this.messageSource.asObservable();


  constructor() { }

  // This is the publish part, triggered whenever some change occurs
  public changeMessage(message: string) {
    this.messageSource.next(message);  // Emit an info for subscribers
  }


}

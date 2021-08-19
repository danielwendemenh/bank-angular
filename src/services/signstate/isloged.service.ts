import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IslogedService {
  constructor() {}
  private isSignedinSource = new BehaviorSubject<boolean>(false);
  currentisSignedin = this.isSignedinSource.asObservable();
  changeisSignedin(isSignedin: boolean) {
    this.isSignedinSource.next(isSignedin);
  }
}

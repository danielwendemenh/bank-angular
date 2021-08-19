import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import 'firebase/auth';
import { IslogedService } from '../signstate/isloged.service';
@Injectable({
  providedIn: 'root',
})
export class FirebaseSerivceService {
  currnetUser: any = null;
  constructor(public auth: AngularFireAuth, public isloged: IslogedService) {
    this.auth.authState.subscribe((user) => {
      this.currnetUser = user;
      if (this.currnetUser) {
        this.isloged.changeisSignedin(true);
      }
    });
  }

  signin(email: string, password: string): void {
    this.auth.setPersistence('local').then(() => {
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          this.isloged.changeisSignedin(true);
          this.currnetUser = userCredential.user;
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }

  async signup(email: string, password: string) {
    await this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isloged.changeisSignedin(true);
      });
  }
  async logout() {
    this.auth.signOut();
  }
}

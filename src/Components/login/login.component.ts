import { Component, OnInit } from '@angular/core';
import { IslogedService } from 'src/services/signstate/isloged.service';
import { FirebaseSerivceService } from '../../services/firebase/firebase.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public fire: FirebaseSerivceService,
    private data: IslogedService,
    private fb: FormBuilder
  ) {}
  isSignedin!: boolean;
  thing: any;
  logform: FormGroup;
  signform: FormGroup;

  ngOnInit() {
    {
      this.data.currentisSignedin.subscribe((isSignedin) => {
        this.isSignedin = isSignedin;
      });
    }

    this.initalizeForm();
  }

  handleLogout(): void {
    this.isSignedin = false;
    this.data.changeisSignedin(this.isSignedin);
  }
  initalizeForm(): void {
    this.logform = this.fb.group({
      email: '',
      password: '',
    });
    this.signform = this.fb.group({
      emailSignup: '',
      cemailSignup: '',
      passwordSignup: '',
    });
  }

  async onSubmitlog() {
    if (this.logform.valid) {
      await this.fire.signin(
        this.logform.controls['email'].value,
        this.logform.controls['password'].value
      );
      if (this.fire.isloged)
        this.data.changeisSignedin((this.isSignedin = true));
    } else {
      alert('fields must be filled correctly');
    }
    this.logform.reset();
    this.signform.reset();
  }
  async onSubmitlsign() {
    if (this.signform.valid) {
      if (
        this.signform.controls['emailSignup'].value ==
        this.signform.controls['cemailSignup'].value
      ) {
        await this.fire
          .signup(
            this.signform.controls['emailSignup'].value,
            this.signform.controls['passwordSignup'].value
          )
          .then(() => {
            this.logform.reset();
            this.signform.reset();
          });
        if (this.fire.isloged.currentisSignedin)
          this.data.changeisSignedin((this.isSignedin = true));
      } else {
        alert('mail dosent match');
      }
    } else {
      alert('fields must be filled correctly');
    }
    this.logform.reset();
    this.signform.reset();
  }
}

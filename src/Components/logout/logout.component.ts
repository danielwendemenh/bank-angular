import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseSerivceService } from 'src/services/firebase/firebase.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();
  constructor(public fire: FirebaseSerivceService) {}

  ngOnInit(): void {}
  logout() {
    this.fire.logout();
    this.isLogout.emit();
  }
}

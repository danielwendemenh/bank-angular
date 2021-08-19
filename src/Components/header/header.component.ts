import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { IslogedService } from 'src/services/signstate/isloged.service';
import { RouterLink } from '@angular/router';
import { FirebaseSerivceService } from 'src/services/firebase/firebase.service';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();
  constructor(
    private data: IslogedService,
    public fire: FirebaseSerivceService
  ) {}
  faBars = faBars;
  faTimes = faTimes;
  RouterLink = RouterLink;
  isSignedin!: boolean;
  ngOnInit() {
    this.data.currentisSignedin.subscribe((isSignedin) => {
      this.isSignedin = isSignedin;
    });
  }
  togglesidebar() {
    let nav = document.querySelector('.nav-links');
    nav?.classList.toggle('open');
  }
  logout() {}
  handleLogout() {
    this.fire.logout();
    this.isLogout.emit();
    this.isSignedin = false;
    this.data.changeisSignedin(this.isSignedin);
  }
}

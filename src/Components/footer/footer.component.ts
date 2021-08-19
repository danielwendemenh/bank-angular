import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  ngOnInit(): void {}
}

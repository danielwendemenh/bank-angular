import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-busines-models',
  templateUrl: './busines-models.component.html',
  styleUrls: ['./busines-models.component.scss'],
})
export class BusinesModelsComponent implements OnInit {
  constructor() {}
  faChevronRight = faChevronRight;
  ngOnInit(): void {}
  togglesecmenu() {
    console.log('click');

    let sec = document.querySelector('.secmenu');
    sec?.classList.toggle('slide');
    let ic = document.querySelector('.ic');
    ic?.classList.toggle('off');
  }
}

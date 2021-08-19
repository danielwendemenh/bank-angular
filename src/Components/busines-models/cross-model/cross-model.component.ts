import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cross-model',
  templateUrl: './cross-model.component.html',
  styleUrls: ['../busines-models.component.scss'],
})
export class CrossModelComponent implements OnInit {
  faChevronRight = faChevronRight;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gramm-model',
  templateUrl: './gramm-model.component.html',
  styleUrls: ['../busines-models.component.scss'],
})
export class GrammModelComponent implements OnInit {
  constructor() {}
  faChevronRight = faChevronRight;
  ngOnInit(): void {}
}

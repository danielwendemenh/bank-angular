import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-risk-model',
  templateUrl: './risk-model.component.html',
  styleUrls: ['../busines-models.component.scss'],
})
export class RiskModelComponent implements OnInit {
  faChevronRight = faChevronRight;

  constructor() {}

  ngOnInit(): void {}
}

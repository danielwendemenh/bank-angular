import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment-model',
  templateUrl: './payment-model.component.html',
  styleUrls: ['../busines-models.component.scss'],
})
export class PaymentModelComponent implements OnInit {
  faChevronRight = faChevronRight;

  constructor() {}

  ngOnInit(): void {}
}

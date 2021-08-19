import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import transaction from '../../model/transaction';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  readonly url = 'http://localhost:5000/transactions';
  transactions: transaction[] | undefined;

  constructor(private http: HttpClient) {
    // this.http
    // .get<transaction[]>(this.url)
    // .toPromise()
    // .then((data) => {
    //   this.transactions = data;
    //   console.log(data);
    // });
  }

  ngOnInit(): void {}
}

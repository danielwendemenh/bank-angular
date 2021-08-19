import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { BusinesModelsComponent } from '../busines-models/busines-models.component';
import { RiskModelComponent } from '../busines-models/risk-model/risk-model.component';
import { PaymentModelComponent } from '../busines-models/payment-model/payment-model.component';
import { CrossModelComponent } from '../busines-models/cross-model/cross-model.component';
import { GrammModelComponent } from '../busines-models/gramm-model/gramm-model.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HeroComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'businessmodels',
    component: BusinesModelsComponent,
    children: [
      {
        path: '',
        redirectTo: 'https://angular-bank-ec888.web.app/(model:gramm)',
        pathMatch: 'full',
      },
      { path: 'risk', component: RiskModelComponent, outlet: 'model' },
      { path: 'payment', component: PaymentModelComponent, outlet: 'model' },
      { path: 'cross', component: CrossModelComponent, outlet: 'model' },
      { path: 'gramm', component: GrammModelComponent, outlet: 'model' },
      {
        path: '(model:gramm)',
        component: GrammModelComponent,
        outlet: 'model',
      },
    ],
  },
  { path: 'transactions', component: TransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}

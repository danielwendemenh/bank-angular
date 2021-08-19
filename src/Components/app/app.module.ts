import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroComponent } from '../hero/hero.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { BusinesModelsComponent } from '../busines-models/busines-models.component';
import { GrammModelComponent } from '../busines-models/gramm-model/gramm-model.component';
import { CrossModelComponent } from '../busines-models/cross-model/cross-model.component';
import { RiskModelComponent } from '../busines-models/risk-model/risk-model.component';
import { PaymentModelComponent } from '../busines-models/payment-model/payment-model.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from '../transactions/transactions.component';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { FirebaseSerivceService } from '../../services/firebase/firebase.service';
import { LogoutComponent } from '../logout/logout.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    BusinesModelsComponent,
    GrammModelComponent,
    CrossModelComponent,
    RiskModelComponent,
    PaymentModelComponent,
    FooterComponent,
    TransactionsComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [FirebaseSerivceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MypageComponent } from './mypage/mypage.component';
import { NaviComponent } from './navi/navi.component';

import { AppRoutingModule } from './app-routing.module';
import { HelloRoutingComponent } from './hello-routing/hello-routing.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    MypageComponent,
    NaviComponent,
    HelloRoutingComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AngularFireModule, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

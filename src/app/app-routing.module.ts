import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MypageComponent } from './mypage/mypage.component';
import { HelloRoutingComponent } from './hello-routing/hello-routing.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: ':id', component: MypageComponent }
    ]},
  { path: '', component: HelloRoutingComponent, outlet: 'hello' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

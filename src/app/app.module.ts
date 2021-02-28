import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { router } from "./routing";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { PopularComponent } from './popular/popular.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    DashboardComponent,
    ListComponent,
    PopularComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

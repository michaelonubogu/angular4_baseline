import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { AppRoutingModule } from './app-routing.module';


import { OvsNavComponent } from './navigation/ovs-nav/ovs-nav.component';
import { OvsFooterComponent } from './navigation/ovs-footer/ovs-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    OvsNavComponent,
    OvsFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', loadChildren: 'app/pages/dashboard/dashboard.module' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IframeComponent } from './iframe/iframe.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {path: '', redirectTo: 'angular', pathMatch: 'full'},
  {path: 'angular', component: CounterComponent},
  {component: IframeComponent, path: "**"} // Fallback route
];

@NgModule({
  declarations: [
    AppComponent,
    IframeComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '!'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

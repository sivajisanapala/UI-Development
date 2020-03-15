import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LeftComponent } from './items/left/left.component';
import { NavComponent } from './items/nav/nav.component';
import { RightComponent } from './items/right/right.component';
import { DashboardComponent } from './items/dashboard/dashboard.component';
import { RegisterComponent } from './items/register/register.component';
import { BboaComponent } from './items/dashboard/brief/bboa/bboa.component';
import { FormsComponent } from './items/dashboard/brief/forms/forms.component';
import { RoutingComponent } from './items/dashboard/brief/routing/routing.component';
import { CbcComponent } from './items/dashboard/brief/cbc/cbc.component';
import { ApiComponent } from './items/dashboard/brief/api/api.component';
import { TypescriptComponent } from './items/dashboard/brief/typescript/typescript.component';
import { JscriptComponent } from './items/dashboard/brief/jscript/jscript.component';
import { Html5Component } from './items/dashboard/brief/html5/html5.component';
import { Css3Component } from './items/dashboard/brief/css3/css3.component';
import { BootstrapComponent } from './items/dashboard/brief/bootstrap/bootstrap.component';
import { AjaxComponent } from './items/dashboard/brief/ajax/ajax.component';
import { NpmComponent } from './items/dashboard/brief/npm/npm.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, //redirectTo useful when having child routes
  {path:'dashboard', component: DashboardComponent,
      children:[
        {path: '', component:BboaComponent},
        {path:'angularBlocks', component:BboaComponent},
        {path:'forms', component:FormsComponent},
        {path:'routing', component:RoutingComponent},
        {path:'componentcommunication', component:CbcComponent},
        {path:'api',component: ApiComponent},
        {path:'typescript',component:TypescriptComponent},
        {path:'javascript',component:JscriptComponent},
        {path:'html',component:Html5Component},
        {path:'css',component:Css3Component},
        {path:'bootstrap',component:BootstrapComponent},
        {path:'ajax',component:AjaxComponent},
        {path:'npm',component:NpmComponent}
      ]
},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LeftComponent, NavComponent, RightComponent, DashboardComponent, RegisterComponent, BboaComponent, FormsComponent, RoutingComponent, CbcComponent, ApiComponent, TypescriptComponent, JscriptComponent, Html5Component, Css3Component, BootstrapComponent, AjaxComponent, NpmComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
 
 }

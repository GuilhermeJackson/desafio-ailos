import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarModule } from 'ng-sidebar';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    SidebarModule.forRoot(),
    NzIconModule
  ],
  exports: [
    BrowserModule,
    NavbarComponent,
    HeaderComponent
  ]
})
export class CoreModule { }

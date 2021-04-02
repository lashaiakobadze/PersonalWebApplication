import { MaterialModule } from './../../material/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';

import { ResumeComponent } from './../../modules/resume/resume.component';
import { PortfolioComponent } from './../../modules/portfolio/portfolio.component';
import { ContactsComponent } from './../../modules/contacts/contacts.component';
import { AboutComponent } from './../../modules/about/about.component';
import { HomeComponent } from './../../modules/home/home.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    PortfolioComponent,
    ResumeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule
  ]
})
export class DefaultModule {  }

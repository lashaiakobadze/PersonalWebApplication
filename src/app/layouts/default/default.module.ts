import { AdminPanelComponent } from './../../modules/portfolio/admin-panel/admin-panel.component';
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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from './../../modules/portfolio/projects.service';

import { ProjectComponent } from './../../modules/portfolio/all/project/project.component';
import { WebAppsComponent } from './../../modules/portfolio/web-apps/web-apps.component';
import { MarkupsComponent } from './../../modules/portfolio/markups/markups.component';
import { AllComponent } from './../../modules/portfolio/all/all.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    ResumeComponent,
    PortfolioComponent,
    AllComponent,
    MarkupsComponent,
    WebAppsComponent, 
    ProjectComponent,
    AdminPanelComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkJs9T87Kn0NKej-X-F6TtBoVPxnXieNI' 
    })
  ],
  providers:[ProjectsService]
})
export class DefaultModule {  }

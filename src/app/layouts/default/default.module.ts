import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './../../material/material/material.module';

import { ResumeComponent } from './../../modules/resume/resume.component';
import { PortfolioComponent } from './../../modules/portfolio/portfolio.component';
import { ContactsComponent } from './../../modules/contacts/contacts.component';
import { AboutComponent } from './../../modules/about/about.component';
import { HomeComponent } from './../../modules/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from './../../modules/portfolio/projects.service';
import { PageNotFoundComponent } from './../../modules/page-not-found/page-not-found.component';
import { AdminPanelComponent } from './../../modules/portfolio/admin-panel/admin-panel.component';

import { ProjectComponent } from './../../modules/portfolio/all/project/project.component';
import { WebAppsComponent } from './../../modules/portfolio/web-apps/web-apps.component';
import { MarkupsComponent } from './../../modules/portfolio/markups/markups.component';
import { AdminComponent } from 'src/app/modules/portfolio/admin-panel/admin/admin.component';
import { PanelComponent } from './../../modules/portfolio/admin-panel/panel/panel.component';
import { AllComponent } from './../../modules/portfolio/all/all.component';
import { ErrorPageComponent } from './../../modules/error-page/error-page.component';
import { AuthGuard } from 'src/app/modules/portfolio/auth-guard.service';
import { AuthService } from './../../modules/portfolio/auth.service';
import { CanDeactivateGuard } from './../../modules/portfolio/can-deactivate-guard.service';


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
    AdminComponent,
    PanelComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkJs9T87Kn0NKej-X-F6TtBoVPxnXieNI' 
    })
  ],
  providers:[ProjectsService, AuthService, AuthGuard, CanDeactivateGuard]
})
export class DefaultModule {  }

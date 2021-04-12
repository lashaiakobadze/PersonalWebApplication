import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './modules/contacts/contacts.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { ResumeComponent } from './modules/resume/resume.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AllComponent } from './modules/portfolio/all/all.component';
import { MarkupsComponent } from './modules/portfolio/markups/markups.component';
import { WebAppsComponent } from './modules/portfolio/web-apps/web-apps.component';
import { AdminPanelComponent } from './modules/portfolio/admin-panel/admin-panel.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
      path: '',
      component: HomeComponent
    }, {
      path: 'about',
      component: AboutComponent
    }, {
      path: 'resume',
      component: ResumeComponent
    }, {
      path: 'portfolio',
      component: PortfolioComponent,
      children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component: AllComponent },
        { path: 'markups', component: MarkupsComponent },
        { path: 'apps', component: WebAppsComponent },
        { path: 'admin-panel', component: AdminPanelComponent }
      ]
    }, {
      path: 'contacts',
      component: ContactsComponent
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

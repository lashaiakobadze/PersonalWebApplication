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
import { PanelComponent } from './modules/portfolio/admin-panel/panel/panel.component';
import { AdminComponent } from './modules/portfolio/admin-panel/admin/admin.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './modules/error-page/error-page.component';
import { AuthGuard } from './modules/portfolio/auth-guard.service';
import { CanDeactivateGuard } from './modules/portfolio/can-deactivate-guard.service';


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
        { path: 'admin-panel',
          // canActivate: [AuthGuard], 
          // canActivateChild: [AuthGuard], 
          component: AdminPanelComponent,
          children: [
            { path: '', redirectTo: 'admin', pathMatch: 'full' },
            { path: 'admin', component: AdminComponent },
            { path: 'panel',
              // canActivate: [AuthGuard], 
              canDeactivate: [CanDeactivateGuard],
              component: PanelComponent 
            }
          ]
        }
      ]
    }, {
      path: 'contacts',
      component: ContactsComponent
    },
    // {  path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true }),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

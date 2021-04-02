import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './modules/contacts/contacts.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { ResumeComponent } from './modules/resume/resume.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { DefaultComponent } from './layouts/default/default.component';

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
      component: PortfolioComponent
    }, {
      path: 'contacts',
      component: ContactsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

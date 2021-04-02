import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from './shared.service';
import { MaterialModule } from './../material/material/material.module';
import { RouterModule } from '@angular/router';
import { HoverDirective } from './components/hover.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent,
    HoverDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    SidenavListComponent,
  ],
  providers: [
    SharedService,
  ]
})
export class SharedModule { }

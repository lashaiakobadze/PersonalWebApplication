import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  homeFocus: boolean; 
  aboutFocus: boolean; 
  portfolioFocus: boolean; 
  resumeFocus: boolean; 
  contactFocus: boolean;

  constructor() { }

  homeClick() {
    this.homeFocus = true;
    this.aboutFocus = this.portfolioFocus = this.resumeFocus = this.contactFocus = false;
  }

  aboutClick() {
    this.aboutFocus = true;
    this.homeFocus = this.portfolioFocus = this.resumeFocus = this.contactFocus = false;
  }

  resumeClick() {
    this.resumeFocus = true;
    this.aboutFocus = this.portfolioFocus = this.homeFocus = this.contactFocus = false;
  }

  portfolioClick() {
    this.portfolioFocus = true;
    this.aboutFocus = this.resumeFocus = this.homeFocus = this.contactFocus = false;
  }

  contactClick() {
    this.contactFocus = true;
    this.aboutFocus = this.resumeFocus = this.homeFocus = this.portfolioFocus = false;
  }

}

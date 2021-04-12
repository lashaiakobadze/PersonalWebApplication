import { SharedService } from './../../shared.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state('topX', style({
        transform: 'rotate(45deg)', 
        transformOrigin: 'left',
        margin: '6px'
      })),
      state('hide', style({
        opacity: 0
      })),
      state('bottomX', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      transition('* => *', [
        animate('0.2s')
      ]),
    ]),
  ],
})

export class HeaderComponent implements OnInit {
  TooltipPosition: string = 'after';
  isHamburguer: boolean = true;
  isOpen: boolean = false;

  @Output() openNav = new EventEmitter<boolean>();
  
  constructor(public sharedService: SharedService) { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.isHamburguer = !this.isHamburguer; 
    this.isOpen = !this.isOpen;
    this.openNav.emit(this.isOpen);
  }
}


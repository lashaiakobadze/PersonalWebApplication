import { SharedService } from './../../shared.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnChanges, OnInit {
  TooltipPosition: string = 'below';
  @Input() navListIsOpen: boolean = false;
  
  constructor(public sharedService: SharedService) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
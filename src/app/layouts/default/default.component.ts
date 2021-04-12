import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  openOut: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  navBarListOpen(value: boolean) {
    this.openOut = value;
  }

}

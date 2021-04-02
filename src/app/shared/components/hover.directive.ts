import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  @Input() defaultColor: string = '#a9a9a9';
  @Input() highlightColor: string = '#E6E6FA';
  @HostBinding('style.color')  color: string;

  constructor() { }

  ngOnInit() {
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover() {
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.color = this.defaultColor;
  }  
}

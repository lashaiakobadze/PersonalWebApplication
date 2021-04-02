import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit, AfterViewInit {
  
  homeImage = '../../../assets/main-img.jpg';

  @ViewChild('tw') typewriterElement;
  @ViewChild('tw2') typewriterElement2;
  @ViewChild('tw3') typewriterElement3;

  ngOnInit() {

   }
  ngAfterViewInit() {
    const target2 = this.typewriterElement2.nativeElement;
    const target3 = this.typewriterElement3.nativeElement;

    const writer2 = new Typewriter(target2, {
      typeColor: '#a9a9a9'
    })
    const writer3 = new Typewriter(target3, {
      typeColor: 'red'
    })

  writer2
  .type('I am a ')
  .removeCursor()
  .then(writer3.start.bind(writer3))
  .start()

  writer3
    .type("")
    .rest(500)
    .clear()
    .changeTypeColor('white')
    .type("web developer.")
    .rest(4000)
    .clear()
    .changeTypeColor('white')
    .type("lecturer.")
    .rest(4000)
    .clear()
    .changeTypeColor('black')
    .then(writer2.start.bind(writer2))
  }
}
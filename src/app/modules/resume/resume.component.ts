import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resumeImg: string = './assets/photoes/IMG_8829.JPG';

  constructor() { }

  ngOnInit(): void {
  }

}

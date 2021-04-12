import { Component, OnInit } from '@angular/core';

declare let require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent  implements OnInit {
  aboutImg: string = './assets/photoes/WAWW1120.JPG';

  ngOnInit() {
  }

  downloadPdf() {
    const pdfUrl = './assets/Lasha_Iakobadze.pdf';
    const pdfName = 'Lasha_Iakobadze';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
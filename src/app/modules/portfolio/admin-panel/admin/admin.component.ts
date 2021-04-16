import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService } from './../../projects.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private password: any = 'portfolio';
  corectPas: boolean = true;
  inputPas: string;

  @ViewChild('adminPas') adminPas: ElementRef;
    
  constructor(public projectsService: ProjectsService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnChanges() {
    this.inputPas = this.adminPas.nativeElement.value;
  }
  
  logIn() {
    this.inputPas = this.adminPas.nativeElement.value;
    if(this.inputPas === this.password) {
      this.corectPas = true;
      this.projectsService.adminPanelInterface = true;
      this.router.navigate(['/portfolio/admin-panel/panel']);
    } else {
      this.corectPas = false;
    }
  }

  ngOnInit() {
  }

}

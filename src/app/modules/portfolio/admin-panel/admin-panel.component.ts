import { Component, ElementRef, ViewChild, OnChanges, OnInit } from '@angular/core';
import { ProjectsService } from './../projects.service';
import { Project } from './../../../shared/project.model';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})

export class AdminPanelComponent implements OnChanges {
  private password: any = 'portfolio';
  corectPas: boolean = true;
  correctPrj: boolean = true;
  inputPas: string;
  newProject: Project;


  @ViewChild('adminPas') adminPas: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('link') link: ElementRef;
  @ViewChild('image') image: ElementRef;
  @ViewChild('type') type: ElementRef;
    
  constructor(public projectsService: ProjectsService) { }

  ngOnChanges() {
    this.inputPas = this.adminPas.nativeElement.value;
  }

  
  logIn() {
    this.inputPas = this.adminPas.nativeElement.value;
    if(this.inputPas === this.password) {
      this.corectPas = true;
      this.projectsService.adminPanelInterface = true;
    } else {
      this.corectPas = false;
    }
  }

  
  logOut() {
    this.projectsService.adminPanelInterface = false;
    this.correctPrj = true;
  }


  submitProject() {
    if(this.type.nativeElement.value !== '' && this.name.nativeElement.value !== '' && this.link.nativeElement.value !== '' && this.image.nativeElement.value !== '') {
      this.newProject = new Project(this.type.nativeElement.value, this.name.nativeElement.value, this.link.nativeElement.value, this.image.nativeElement.value);
      this.projectsService.addProject(this.newProject);
      this.type.nativeElement.value = this.name.nativeElement.value = this.link.nativeElement.value = this.image.nativeElement.value = '';
      this.correctPrj = true;
      localStorage.setItem('projects', JSON.stringify(this.projectsService.getProjects()));
    } else {
      this.correctPrj = false;
    }
  }

}

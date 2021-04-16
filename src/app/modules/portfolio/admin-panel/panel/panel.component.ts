import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from './../../projects.service';
import { Project } from './../../../../shared/project.model';
import { CanComponentDeactivate } from '../../can-deactivate-guard.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, CanComponentDeactivate {
  correctPrj: boolean = true;
  newProject: Project;
  changeSaved = false;

  @ViewChild('name') name: ElementRef;
  @ViewChild('link') link: ElementRef;
  @ViewChild('image') image: ElementRef;
  @ViewChild('type') type: ElementRef;
  
  constructor(public projectsService: ProjectsService, 
              private router: Router, 
              private route: ActivatedRoute
              ) { }

  logOut() {
    this.projectsService.adminPanelInterface = false;
    this.correctPrj = true;
    this.router.navigate(['/portfolio/all']);
    this.changeSaved = true;
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

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.projectsService.adminPanelInterface) {
      return true;
    }  
    if(!this.changeSaved) {
      return confirm('Do you really want to leave?');
    } else return;    
  }

  ngOnInit(): void {
  }
}

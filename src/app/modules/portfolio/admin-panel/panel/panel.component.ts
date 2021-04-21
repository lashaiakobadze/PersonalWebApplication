import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from './../../projects.service';
import { Project } from './../../../../shared/project.model';
import { CanComponentDeactivate } from '../../can-deactivate-guard.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, CanComponentDeactivate {
  newProject: Project;
  changeSaved = false;

  projectForm: FormGroup;

  constructor(
    public projectsService: ProjectsService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }
  

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'link': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required),
    });
  }


  onSubmitProject() {    
    const value = this.projectForm.value;
    this.newProject = new Project(
      this.projectForm.value.type.value, 
      this.projectForm.value.name.value, 
      this.projectForm.value.link.value, 
      this.projectForm.value.image.value);
    this.projectsService.addProject(this.newProject);
    // localStorage.setItem('projects', JSON.stringify(this.projectsService.getProjects()));
    this.projectForm.reset();
  }


  logOut() {
    this.projectsService.adminPanelInterface = false;
    this.router.navigate(['/portfolio/all']);
    this.changeSaved = true;
  }
  

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.projectsService.adminPanelInterface) {
      return true;
    }  
    if(!this.changeSaved) {
      return confirm('Do you really want to leave?');
    } else return;    
  }

}

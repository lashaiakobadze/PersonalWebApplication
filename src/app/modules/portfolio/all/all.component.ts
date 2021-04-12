import { Component, DoCheck, OnInit } from '@angular/core';
import { ProjectsService } from './../projects.service';
import { Project } from './../../../shared/project.model';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})

export class AllComponent implements OnInit, DoCheck {
  allProjects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.allProjects = this.projectsService.getProjects();
  }

}

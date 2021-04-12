import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from './../../../shared/project.model';


@Component({
  selector: 'app-web-apps',
  templateUrl: './web-apps.component.html',
  styleUrls: ['./web-apps.component.scss']
})
export class WebAppsComponent implements OnInit {
  appProjects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.appProjects = this.projectsService.getProjects().filter((project)=>{
      return project.type === 'app';
    })
  }

}

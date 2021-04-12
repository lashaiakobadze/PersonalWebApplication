import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../projects.service';
import { Project } from './../../../shared/project.model';


@Component({
  selector: 'app-markups',
  templateUrl: './markups.component.html',
  styleUrls: ['./markups.component.scss']
})
export class MarkupsComponent implements OnInit {
  markupProjects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.markupProjects = this.projectsService.getProjects().filter((project)=>{
      return project.type === 'markup';
    })
  }

}

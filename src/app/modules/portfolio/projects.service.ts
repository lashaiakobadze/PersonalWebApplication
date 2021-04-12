import { Injectable, OnInit } from '@angular/core';
import { Project } from './../../shared/project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements OnInit {
  adminPanelInterface: boolean = false;

  constructor() { }

  projects: Project[] = [
    new Project('app', 'Covid App','https://lashaiakobadze.github.io/COVID-19/', './assets/projects/Covid-19.png'),
    new Project('app', 'ToDo Incluido', 'https://lashaiakobadze.github.io/ToDo-Incluido/', './assets/projects/todo-incluido.png'),
    new Project('app','Forkify App MVC', 'https://forkify-forpizza.netlify.app/', './assets/projects/Forkify.webp'),
    new Project('markup', 'Online Shop', 'https://lashaiakobadze.github.io/Online-Shop/', './assets/projects/Online-shop.png'),
    new Project('app', 'Mapty', 'https://lashaiakobadze.github.io/Mapty/', './assets/projects/Maprty.png'),
    new Project('markup', 'Restaurant Georgia', 'https://lashaiakobadze.github.io/Restaurant-Georgia/', './assets/projects/Restoran.png'),
    new Project('markup', 'Markup', 'https://lashaiakobadze.github.io/Markup/', './assets/projects/markup.png'),
    new Project('markup', 'AdjaraBet', 'https://lashaiakobadze.github.io/AdjaraBet/', './assets/projects/adjarabet.svg'),
    new Project('app', 'Mac Calculator', 'https://lashaiakobadze.github.io/Mac-Calculator/', './assets/projects/calculator.webp'),
  ];


  ngOnInit() {
    console.log(this.projects);
  }

  getProjects() {
    return this.projects.slice();
  }

  addProject(project: Project) {
    this.projects.push(project);
    console.log(this.projects);
  }
}

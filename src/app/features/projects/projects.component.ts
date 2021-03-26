import { Component, OnInit } from '@angular/core';

enum ProjectTools {
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
  NEST_JS = "nest.js",
  ANGULAR = "angular.js",
  NGRX = "ngrx",
  SCSS = "scss",
  CSS = "css",
  JSDOM = "jsdom",
  SPFX = "spfx",
  EXPRESS = "express",
  NODE_JS = "node",
  MONGO_DB = "mongodb",
  INDEXED_DB = "indexed db",
  HTML = "html"
}

enum ProjectType {
  APP = "app",
  ALG = "alg"
}

interface Project {
  name: string;
  type: ProjectType;
  app: string;
  git: string;
  description: string;
  tools: string[];
  date: Date;
  image: string;
  status: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Tabulator',
      type: ProjectType.APP,
      image: './../../../assets/tabulator.png?rr',
      tools: [ProjectTools.ANGULAR, ProjectTools.SCSS, ProjectTools.HTML, ProjectTools.MONGO_DB, ProjectTools.NEST_JS, ProjectTools.NGRX, ProjectTools.NODE_JS, ProjectTools.TYPESCRIPT],
      git: '',
      app: '',
      date: new Date(),
      description: 'Tabulator is a trial MongoDB Emulator, designed specifically for non-devs to have a taste of what MongoDB is.',
      status: true
    },
    {
      name: 'Transactor',
      type: ProjectType.APP,
      image: '',
      tools: [ProjectTools.JSDOM, ProjectTools.CSS, ProjectTools.HTML, ProjectTools.MONGO_DB, ProjectTools.EXPRESS, ProjectTools.NODE_JS, ProjectTools.JAVASCRIPT],
      git: '',
      app: '',
      date: new Date(),
      description: 'A simple application that illustrates how the banking system works', status: true
    },
    {
      name: 'Transverser',
      type: ProjectType.APP,
      image: './../../../assets/transverser.png',
      tools: [ProjectTools.NODE_JS, ProjectTools.JAVASCRIPT],
      git: '',
      app: '',
      date: new Date(),
      description: 'A tree data-structure that children(branches) can trace back to the parents(root) and vise verser',
      status: true
    },
    {
      name: 'Deo',
      type: ProjectType.APP,
      image: '',
      tools: [ProjectTools.ANGULAR, ProjectTools.SCSS, ProjectTools.HTML, ProjectTools.MONGO_DB, ProjectTools.NEST_JS, ProjectTools.NGRX, ProjectTools.NODE_JS, ProjectTools.TYPESCRIPT],
      git: '',
      app: '',
      date: new Date(),
      description: 'A platform for tailors to showcase their ready-made designs for customers to purchase',
      status: true
    },
    {
      name: 'Portfolio',
      type: ProjectType.APP,
      image: '',
      tools: [ProjectTools.ANGULAR, ProjectTools.SCSS, ProjectTools.HTML, ProjectTools.NODE_JS, ProjectTools.TYPESCRIPT],
      git: '',
      app: '',
      date: new Date(),
      description: 'Well "this" is my Portfolior',
      status: false
    },
    {
      name: 'PromixedDB',
      type: ProjectType.APP,
      image: './../../../assets/promixedDB.png',
      tools: [ProjectTools.INDEXED_DB, ProjectTools.NODE_JS, ProjectTools.JAVASCRIPT],
      git: '',
      app: '',
      date: new Date(),
      description: 'A promisified version of IndexedDB',
      status: false
    },
    {
      name: 'Nulli',
      type: ProjectType.APP,
      image: '',
      tools: [ProjectTools.NODE_JS, ProjectTools.JAVASCRIPT],
      git: '',
      app: '',
      date: new Date(),
      description: 'A simple JSON database',
      status: false
    },
  ];

  tools = ['all', ...Object.values(ProjectTools)];
  currentTool = this.tools[0];

  constructor() { }

  ngOnInit(): void {
  }

  showProject(project: Project) {
    return this.currentTool == 'all'
      ? 'grid'
      : project.tools.includes(this.currentTool)
        ? 'grid'
        : 'none';
  }
}

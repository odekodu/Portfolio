import { Component, OnInit } from '@angular/core';
import * as projectList from '../../../assets/data/projects.json';

interface Project {
  name: string;
  type: string;
  git: string;
  description: string;
  tools: string[];
  status: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = (projectList as any).default;

  tools: string[] = [];
  currentTool: string = '';

  constructor() { }

  ngOnInit(): void {    
    this.tools = Array.from(['all', ...new Set(...this.projects.map(project => project.tools))]);
    
    this.currentTool = this.tools[0];
  }

  toggleTool(tool: string) {
    this.currentTool = this.currentTool == tool ? this.tools[0] : tool;
  }

  showProject(project: Project) {
    return this.currentTool == this.tools[0]
      ? 'grid'
      : project.tools.includes(this.currentTool)
        ? 'grid'
        : 'none';
  }
}

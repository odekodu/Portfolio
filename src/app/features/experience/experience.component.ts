import { Component, OnInit } from '@angular/core';
import * as experienceList from '../../../assets/data/experiences.json';

interface Experience { 
  company: string, 
  location: string, 
  from: Date, 
  to?: Date, 
  job: string, 
  details: string[]
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = (experienceList as any).default;
  constructor() { }

  ngOnInit(): void {
  }

}

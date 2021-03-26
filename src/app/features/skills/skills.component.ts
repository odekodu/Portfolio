import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    "javascript",
    "typescript",
    "nest.js",
    "angular.js",
    "ngrx",
    "scss",
    "css",
    "jsdom",
    "express",
    "node",
    "mongodb",
    "indexeddb",
  ];

  works: { company: string, location: string, date: Date, job: string, details: string[] }[] = [
    {
      company: 'IPISolutions NIG. LTD.',
      location: 'No. 9 Adebola Str Surulere, Lagos State, Nigeria',
      date: new Date(),
      job: 'FullStack & Lead Developer',
      details: [
        "Created the framework for Crater365 page builder",
        "Worked with a team of developers in the building and maintainance Crater365 using SPFX",
        "Working on Tabulator, a list management systym that runs on top of MongoDB using Angular and Nest.js"
      ]
    },
    {
      company: 'Galaxy Backbone PLC.',
      location: 'Central Area, Abuja',
      date: new Date(),
      job: 'Technical Support Staff',
      details: [
        "Six months internship",
        "Support for site installation.",
        "Site monitoring and availability reporting",
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

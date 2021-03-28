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

  works: { company: string, location: string, from: Date, to: Date | string, job: string, details: string[] }[] = [
    {
      company: 'IPISolutions NIG. LTD.',
      location: 'No. 9 Adebola Str Surulere, Lagos State, Nigeria',
      from: new Date('2019/08/09'),
      to: new Date(),
      job: 'FullStack & Lead Developer',
      details: [
        "Created the framework for Crater365 page builder",
        "Worked with a team of developers in the building and maintainance Crater365 using SPFX",
        "Working on Tabulator, a list management systym that runs on top of MongoDB using Angular and Nest.js"
      ]
    },
    {
      company: 'Kliiq',
      location: 'Remote',
      from: new Date('2020/12/19'),
      to: new Date(),
      job: 'Backend Engineer',
      details: [
        "Built Accademia Service which is a distributed micro-service on a VPC",
      ]
    },
    {
      company: 'Galaxy Backbone PLC.',
      location: 'Central Area, Abuja',
      from: new Date('2015/02/07'),
      to: new Date('2015/08/02'),
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

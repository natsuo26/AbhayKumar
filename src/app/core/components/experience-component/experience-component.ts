import { Component } from '@angular/core';
import { ExperienceItemComponent } from './experience-item-component/experience-item-component';
import { Experience } from './experience';

@Component({
  selector: 'app-experience-component',
  imports: [ExperienceItemComponent],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [];

  constructor() {
    this.experiences = [
      {
        title: 'Software Development Engineer',
        company: 'AVL',
        start: new Date('2024-06-01T12:00:00Z'),
        end: null,
        description:
          "Working on AVL's PUMA2 LIVE project with the team in India, working on the Web Development with Technologies such as Angular and .NET core.",
        technologies: ['Angular', '.NET Core', 'C#', 'OracleDB', 'SignalR'],
      },
      {
        title: 'Software Trainee',
        company: 'AVL',
        start: new Date('2023-10-01T12:00:00Z'),
        end: new Date('2024-06-01T12:00:00Z'),
        description:
          "Worked on AVL's PUMA Project, Learned a lot about advanced C++ and Modern day C++ programming standards, used modern approaches to maintain the Project. and started working on basic web infrastructure",
        technologies: ['C++', 'HTML', 'CSS', 'JS'],
      },
    ];
  }
}

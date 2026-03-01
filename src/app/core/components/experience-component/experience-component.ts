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
        duration: 'Jun 2024 - Present • 1 Year 10 Months',
        description:
          "Working on AVL's PUMA2 LIVE project with the team in India, working on the Web Development with Technologies such as Angular and .NET core.",
        technologies: ['Angular', '.NET Core', 'C#', 'OracleDB', 'SignalR'],
      },
      {
        title: 'Software Trainee',
        company: 'AVL',
        duration: 'Oct 2023 - Jun 2024 • 9 Months',
        description:
          "Worked on AVL's PUMA Project, Learned a lot about advanced C++ and Modern day C++ programming standards, used modern approaches to maintain the Project. and started working on basic web infrastructure",
        technologies: ['C++', 'HTML', 'CSS', 'JS'],
      },
    ];
  }
}

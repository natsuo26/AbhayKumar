import { Component } from '@angular/core';
import { Skill } from './skill';
import { SkillComponent } from './skill-component/skill-component';

@Component({
  selector: 'app-skills-component',
  imports: [SkillComponent],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.scss',
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', logo: 'angular' },
    { name: 'C++', logo: 'c++' },
    { name: 'C#', logo: 'c#' },
    { name: 'ASP.NET Core', logo: 'net-frakework' },
    { name: 'TypeScript', logo: 'typescript' },
    { name: 'Python', logo: 'python' },
    { name: 'Git', logo: 'Git' },
    { name: 'Docker', logo: 'docker' },
    { name: 'SignalR', logo: 'signalr' },
    { name: 'TensorFlow', logo: 'tensorflow' },
  ];
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-experience-item-component',
  standalone: true,
  templateUrl: './experience-item-component.html',
  styleUrl: './experience-item-component.scss',
})
export class ExperienceItemComponent {
  experienceTitle = input.required<string>();
  experienceCompany = input.required<string>();
  experienceDuration = input.required<string>();
  experienceDescription = input.required<string>();
  experienceTechnologies = input.required<string[]>();
}

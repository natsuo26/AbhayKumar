import { Component, input } from '@angular/core';
import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project-component',
  imports: [MatIcon],
  templateUrl: './project-component.html',
  styleUrl: './project-component.scss',
})
export class ProjectComponent {
  projectTitle = input<string>('');
  projectDescription = input<string>('');
  projectLink = input<string>('');
}

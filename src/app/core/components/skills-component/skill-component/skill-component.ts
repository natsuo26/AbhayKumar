import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-skill-component',
  imports: [MatIcon, MatTooltip],
  templateUrl: './skill-component.html',
  styleUrl: './skill-component.scss',
})
export class SkillComponent {
  name = input<string>('');
  logo = input<string>('');
}

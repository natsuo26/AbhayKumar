import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home-component/home-component';
import { ProjectsComponent } from './core/components/projects-component/projects-component';
import { SkillsComponent } from './core/components/skills-component/skills-component';
import { ExperienceComponent } from './core/components/experience-component/experience-component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
];

import { Component, effect, HostListener, output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AppBarComponent } from './core/components/app-bar-component/app-bar-component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeComponent } from './core/components/home-component/home-component';
import { ProjectsComponent } from './core/components/projects-component/projects-component';
import { SkillsComponent } from './core/components/skills-component/skills-component';
import { ExperienceComponent } from './core/components/experience-component/experience-component';

@Component({
  selector: 'app-root',
  imports: [
    AppBarComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
  activeSection = signal<string>('home');
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private readonly router: Router,
  ) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./GitHub_Invertocat_Black_Clearspace.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./angular.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'c#',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./cSharp.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'c++',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./c++.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'docker',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./docker.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'Git',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./Git.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'net-frakework',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./net-framework.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'python',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./python.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'signalr',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./signalr.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'tensorflow',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./tensorflow.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'typescript',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./typescript.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./LinkedIn.svg'),
    );
    effect(() => {
      const section = this.activeSection();
      this.router.navigate([`/${section}`], {
        replaceUrl: true,
        onSameUrlNavigation: 'ignore',
      });
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'projects', 'skills', 'experience'];
    const scrollPosition = window.scrollY;
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop - 150;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetposition = elementPosition - 150;
      window.scrollTo({
        top: offsetposition,
        behavior: 'smooth',
      });
    }
  }
}

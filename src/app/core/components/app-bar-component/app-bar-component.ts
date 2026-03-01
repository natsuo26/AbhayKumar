import { Component, effect, input, Input, output } from '@angular/core';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-app-bar-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-bar-component.html',
  styleUrl: './app-bar-component.scss',
})
export class AppBarComponent {
  activeSection = input<string>('');
  emitSection = output<string>();
  isMobileMenuOpen = false;
  links: { path: string; label: string }[] = [];
  constructor() {
    this.links = routes
      .filter((route: Route) => route.path !== undefined && route.title)
      .map((route: Route) => ({
        path: route.path === '' ? '/' : `/${route.path}`,
        label: route.title as string,
      }));
  }

  section(section: string) {
    this.emitSection.emit(section);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}

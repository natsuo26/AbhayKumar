import { Component } from '@angular/core';
import { ProjectComponent } from './project-component/project-component';
import { Project } from './project';

@Component({
  selector: 'app-projects-component',
  imports: [ProjectComponent],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor() {
    this.projects = [
      {
        title: 'Branch Name Generator',
        description:
          'A web application that generates descriptive and meaningful branch names for Git repositories based on user input.',
        link: 'https://github.com/natsuo26/BranchNameGenerator',
      },
      {
        title: 'Download Sorter Service',
        description:
          'DownloadSorterService is a Windows service that monitors the Downloads folder (or any configured directory) and automatically sorts files into folders based on their file extensions.',
        link: 'https://github.com/natsuo26/DownloadSorterService',
      },
      {
        title: 'Bank Product Marketing Analysis',

        description:
          'A data analysis project that examines marketing strategies for bank products using Python, Pandas, and Matplotlib to derive insights from customer data.',
        link: 'https://github.com/natsuo26/BankProductMarketingAnalysis',
      },
      {
        title: 'ping',
        description:
          'A simple Chat application using signalR and ASP.NET Core. UI built with Angular. the project is still not completed and under development.',
        link: 'https://github.com/natsuo26/ping',
      },
    ];
  }
}

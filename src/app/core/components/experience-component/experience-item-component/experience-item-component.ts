import { Component, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-experience-item-component',
  standalone: true,
  templateUrl: './experience-item-component.html',
  styleUrl: './experience-item-component.scss',
})
export class ExperienceItemComponent {
  experienceTitle = input.required<string>();
  experienceCompany = input.required<string>();
  experienceStart = input.required<Date>();
  experienceEnd = input.required<Date | null | undefined>();
  experienceDescription = input.required<string>();
  experienceTechnologies = input.required<string[]>();
  experienceDurationInString = signal<string>('');

  constructor() {
    effect(() => {
      // Ensure we have a valid start date object
      const startTime = new Date(this.experienceStart());
      const rawEndTime = this.experienceEnd();

      // If no end date is provided, treat it as "Present" (current time)
      const isPresent = !rawEndTime;
      const endTime = isPresent ? new Date() : new Date(rawEndTime);

      const duration = this.getDurationInYearsAndMonths(startTime, endTime);

      // Format readable month names (e.g., "June", "July")
      const startMonthName = startTime.toLocaleString('en-US', { month: 'long' });
      const startYear = startTime.getFullYear();

      let durationString = '';

      if (isPresent) {
        // Appends "Present" at the end of the calculated duration string
        durationString = `${startMonthName} ${startYear} - Present • ${this.formatDuration(duration)}`;
      } else {
        const endMonthName = endTime.toLocaleString('en-US', { month: 'long' });
        const endYear = endTime.getFullYear();
        durationString = `${startMonthName} ${startYear} - ${endMonthName} ${endYear} • ${this.formatDuration(duration)}`;
      }

      this.experienceDurationInString.set(durationString);
    });
  }

  getDurationInYearsAndMonths(start: Date, end: Date): { years: number; months: number } {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (end.getDate() < start.getDate() && months > 0) {
      months--;
    } else if (end.getDate() < start.getDate() && months === 0 && years > 0) {
      years--;
      months = 11;
    }

    return { years, months };
  }

  // Helper method to make the final duration text clean (e.g., hiding "0 Years")
  private formatDuration(duration: { years: number; months: number }): string {
    const yearPart =
      duration.years > 0 ? `${duration.years} ${duration.years === 1 ? 'Year' : 'Years'}` : '';
    const monthPart =
      duration.months > 0 ? `${duration.months} ${duration.months === 1 ? 'Month' : 'Months'}` : '';

    if (yearPart && monthPart) return `${yearPart} ${monthPart}`;
    return yearPart || monthPart || '1 Month'; // Fallback if less than a month
  }
}

import { Component, OnInit } from '@angular/core';
import {
  faChevronUp,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Icons } from 'src/constant/icon.config';
import logger from 'src/lib/logger';
import { experienceDataProps, personalDataProps, stepProps } from 'src/types';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {
  steps: stepProps[] = [
    { id: 'personal', label: 'Personal Information', icon: Icons.address },
    { id: 'experience', label: 'Work Experience', icon: Icons.work },
    { id: 'education', label: 'Education', icon: Icons.education },
    { id: 'skills', label: 'Skills', icon: Icons.check },
  ];

  personalData: personalDataProps = {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phoneNumber: '',
    city: '',
    country: '',
    summary: '',
  };

  experienceData: experienceDataProps[] = [];

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  currentStepIndex = 0;
  accordionExpandedIndex: number | null = null;
  currentlyWorking = true;
  faPlus = faPlus;
  faChevronUp = faChevronUp;
  faTrash = faTrash;
  selectedMonth: string = this.months[new Date().getMonth()];
  selectedYear: string = new Date().getFullYear().toString();

  ngOnInit() {
    logger('initialized');
  }

  getYearRange(): number[] {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 10; // Adjust the number of years as needed
    const endYear = currentYear + 5;
    const years: number[] = [];

    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }

    return years;
  }

  get currentStep(): stepProps {
    return this.steps[this.currentStepIndex];
  }

  handleStep(stepIndex: number) {
    this.currentStepIndex = stepIndex;
  }

  toggleAccordion(i: number): void {
    if (this.accordionExpandedIndex === i) {
      // Collapse the currently expanded experience
      this.accordionExpandedIndex = null;
    } else {
      // Expand the clicked experience
      this.accordionExpandedIndex = i;
    }
  }

  addExperience() {
    const newExperience: experienceDataProps = {
      jobTitle: '',
      company: '',
      startMonth: this.selectedMonth,
      startYear: this.selectedYear,
      endMonth: this.selectedMonth,
      endYear: this.selectedYear,
      city: '',
      description: '',
    };
    // Collapse all other experiences
    this.accordionExpandedIndex = this.experienceData.length;
    // Add the new experience to the beginning of the array
    this.experienceData.push(newExperience);
  }

  deleteExperience(index: number) {
    // Remove the experience at the specified index
    this.experienceData.splice(index, 1);
  }
}

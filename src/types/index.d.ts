import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type menuItemsProps = {
  label: string;
  link: string;
};

export type stepProps = {
  id: string;
  label: string;
  icon: IconProp;
};

export type personalDataProps = {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;
  summary: string;
};

export type experienceDataProps = {
  jobTitle: string;
  company: string;
  startMonth: Date | string;
  startYear: Date | string;
  endMonth: Date | string;
  endYear: Date | string;
  city: string;
  description: string;
};

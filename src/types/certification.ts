
import { IconType } from 'react-icons';

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  detailsUrl: string;
  icon: IconType;
};


import { technicalCertifications } from './certificates/technical';
import { managementCertifications } from './certificates/management';
import { businessCertifications } from './certificates/business';
import { Certification } from '@/types/certification';

export const certifications: Certification[] = [
  ...technicalCertifications,
  ...managementCertifications,
  ...businessCertifications,
];

export default certifications;

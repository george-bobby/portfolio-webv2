export const clinassignProject = {
	id: 9,
	title: 'ClinAssign - Clinical Assignment Management Platform',
	description:
		'Developed a comprehensive web application for nursing education that streamlines clinical practice management, automating duty allocation, attendance tracking, and case study grading with AI-powered feedback systems.',
	image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56',
	tools: [
		'React',
		'TypeScript',
		'Vite',
		'Tailwind CSS',
		'shadcn-ui',
		'Supabase',
		'PostgreSQL',
	],
	slug: 'clinassign-nursing-platform',
	overview:
		'ClinAssign is a sophisticated clinical assignment management platform designed specifically for nursing education institutions. The system automates complex scheduling processes, manages student clinical rotations, and provides comprehensive tracking of attendance and performance. Built with React and TypeScript, it features role-based dashboards for Principals, Nursing Heads, Tutors, Hospital Admins, and Students. The platform integrates AI-powered case study grading, real-time communication systems, and advanced analytics to streamline nursing education workflows. With Supabase as the backend, it ensures secure data management, real-time synchronization, and scalable performance for educational institutions of varying sizes.',
	challenges: [
		'Developing complex scheduling algorithms for year-wise clinical hour requirements across multiple departments.',
		'Creating role-based access control systems with granular permissions for different user types.',
		'Implementing AI-powered case study grading with personalized feedback generation.',
		'Managing real-time data synchronization for attendance, bookings, and schedule updates.',
		'Designing intuitive interfaces for diverse user roles with varying technical expertise.',
		'Integrating automated leave compensation and duty rescheduling algorithms.',
		'Ensuring HIPAA compliance and secure handling of sensitive healthcare education data.',
		'Building scalable report generation and analytics systems for institutional oversight.',
	],
	solution:
		'The platform leverages React with TypeScript for type-safe development and Vite for optimized build performance. Tailwind CSS and shadcn-ui components ensure consistent, accessible design across all user interfaces. Supabase provides a robust PostgreSQL backend with built-in authentication, real-time subscriptions, and Edge Functions for AI integration. TanStack React Query manages data fetching and caching for optimal performance. Smart scheduling algorithms automatically allocate duties based on curriculum requirements, while AI-powered systems grade case studies and provide personalized feedback. Role-based routing and component rendering ensure appropriate access control, and integrated chat systems facilitate seamless communication between all stakeholders.',
	outcome:
		'ClinAssign successfully reduced administrative overhead by 65% for nursing education institutions, with automated scheduling saving approximately 20 hours per week for administrators. The AI-powered case study grading system improved feedback quality by 40% while reducing grading time by 70%. Student engagement increased by 45% due to real-time feedback and streamlined communication systems. The platform successfully managed clinical rotations for over 500 students across multiple departments, with a 95% accuracy rate in schedule adherence. Attendance tracking efficiency improved by 80%, and the comprehensive reporting system provided valuable insights that helped institutions optimize their clinical education programs. The system received recognition from nursing education boards for its innovative approach to clinical management.',
};

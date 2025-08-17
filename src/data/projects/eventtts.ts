export const eventttsProject = {
	id: 4,
	title: 'Eventtts: Event Management Fullstack Application',
	description:
		'Developed a Next.js-based event management system featuring nested events, timetables, and an events calendar. Integrated MongoDB for efficient event data storage and retrieval, Express.js for handling the backend API.',
	image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
	tools: [
		'Next.js',
		'MongoDB',
		'Express.js',
		'Node.js',
		'Socket.io',
		'JWT',
		'Tailwind CSS',
	],
	slug: 'eventtts-management',
	overview:
		'Eventtts is a comprehensive event management system tailored for CHRIST University, allowing students and faculty to create, manage, and track events with a user-friendly interface. The platform supports complex event hierarchies with nested sub-events, recurring event patterns, and multi-location coordination. Features include automated email notifications, QR code generation for event check-ins, attendance tracking, and detailed analytics dashboards. The system integrates with university calendars and provides role-based access control for different user types including students, faculty, administrators, and event organizers. Advanced features include event capacity management, waitlist functionality, feedback collection systems, and integration with payment gateways for paid events. The platform also supports virtual events with video conferencing integration and hybrid event management capabilities.',
	challenges: [
		'Designing a system that supports nested events within main events.',
		'Implementing an interactive timetable with real-time updates.',
		'Optimizing database queries for quick event retrieval and updates.',
		'Creating a scalable notification system for large user bases.',
		'Implementing complex recurring event patterns and exceptions.',
		'Ensuring real-time synchronization across multiple user sessions.',
		'Developing an intuitive interface for complex event hierarchies.',
		'Integrating with existing university systems and databases.',
	],
	solution:
		'Next.js was chosen for its server-side rendering capabilities, ensuring quick loading times. MongoDB was used to structure events efficiently with a nested document approach. The app included a drag-and-drop event scheduler and real-time push notifications for updates. Express.js provided a robust API layer for handling complex business logic and data validation. Socket.io enabled real-time updates across all connected clients, ensuring immediate synchronization of event changes. JWT authentication secured user sessions and API endpoints. Tailwind CSS provided a responsive and modern user interface. Advanced indexing strategies in MongoDB optimized query performance for large datasets. The system implemented caching mechanisms using Redis for frequently accessed data and utilized background job processing for sending notifications and generating reports.',
	outcome:
		'The system streamlined event organization, increasing event participation by 30% and reducing scheduling conflicts through efficient real-time updates. The platform successfully managed over 500 events in its first semester, with more than 10,000 student registrations. Event organizers reported a 50% reduction in administrative overhead, while students experienced a 40% improvement in event discovery and registration processes. The automated notification system achieved a 95% delivery rate, and the QR code check-in feature reduced event entry times by 60%. The analytics dashboard provided valuable insights that helped improve future event planning, leading to a 25% increase in event satisfaction scores. The Industry Oriented Curriculum program recognized the platform for its innovation in educational event management.',
};

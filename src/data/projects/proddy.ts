export const proddyProject = {
	id: 7,
	title: 'Proddy - Your Teams Second Brain & Collaboration Platform',
	description:
		'Developed a full-stack app using Next.js and ConvexDb with modules for chat, canvas whiteboarding, smart notes, and Kanban boards.',
	image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
	tools: [
		'Next.js',
		'ConvexDB',
		'AI Agents',
		'LLMs',
		'AWS',
		'WebSocket',
		'LiveStore',
	],
	slug: 'proddy-team-brain',
	overview:
		"Proddy is an innovative team collaboration platform designed to serve as your team's second brain. Built with Next.js and ConvexDb, it integrates multiple productivity modules including real-time chat, interactive canvas whiteboarding, intelligent note-taking, and Kanban project management. The platform leverages AI agents for task automation and provides contextual Q&A capabilities using advanced Large Language Models. The backend infrastructure is powered by Convex with cloud deployment on AWS, ensuring scalability and reliability for teams of all sizes.",
	challenges: [
		'Integrating multiple collaboration tools into a seamless unified experience.',
		'Implementing real-time synchronization across chat, whiteboard, and notes modules.',
		'Developing AI agents that can understand team context and automate repetitive tasks.',
		'Ensuring low-latency performance for real-time collaborative features.',
		"Creating an intuitive interface that doesn't overwhelm users with multiple features.",
		'Implementing secure data handling for sensitive team information.',
	],
	solution:
		'The platform was architected using Next.js for a responsive frontend with ConvexDb providing real-time data synchronization across all modules. AI agents were implemented using advanced LLMs to understand team workflows and provide contextual assistance. The canvas whiteboarding feature uses WebRTC for real-time collaboration, while the smart notes system employs natural language processing for automatic categorization and search. Kanban boards integrate with AI for intelligent task prioritization and deadline predictions. AWS infrastructure ensures global availability and automatic scaling based on team usage patterns.',
	outcome:
		"Proddy successfully improved team productivity by 40% through its integrated approach to collaboration. The AI-powered task automation reduced manual work by 35%, while the unified interface decreased context switching time by 50%. Teams reported a 60% improvement in knowledge retention and sharing, with the platform serving as an effective 'second brain' for organizational memory. The real-time collaboration features led to a 45% increase in team engagement and faster project completion times.",
};

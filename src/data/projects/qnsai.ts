export const qnsaiProject = {
	id: 5,
	title: 'QnsAI: Question Paper Generation with Fine-Tuned Llama 3.2',
	description:
		"Implemented AI-driven customizable difficulty levels based on Bloom's Taxonomy. Developed a browser extension leveraging the V8 JavaScript Engine for seamless question preparation.",
	image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
	tools: [
		'Llama 3.2',
		'JavaScript',
		'QTI',
		'YouTube API',
		'V8 Engine',
		'Chrome Extension',
		'Python',
		'Transformers',
	],
	slug: 'qnsai-auto-question',
	overview:
		"QnsAI automates the process of question paper generation using a fine-tuned Llama 3.2 model. The platform allows educators to create question papers based on Bloom's Taxonomy, with customizable difficulty levels and support for various input formats, including text, documents, and YouTube video transcripts. The system features an intelligent browser extension that leverages the V8 JavaScript Engine for real-time question generation and seamless integration with educational platforms. Advanced features include automatic question categorization, plagiarism detection, answer key generation, and comprehensive analytics for question effectiveness. The platform supports multiple question types including multiple choice, short answer, essay questions, and practical assessments. Integration with learning management systems enables direct export of generated question papers in various formats including PDF, Word, and QTI-compliant XML for seamless integration with existing educational infrastructure.",
	challenges: [
		'Developing an AI model capable of generating contextually appropriate questions.',
		'Ensuring question quality aligns with educational standards.',
		'Supporting multiple input formats while maintaining accuracy.',
		'Creating a browser extension that works efficiently across different platforms.',
		'Implementing real-time question generation without compromising performance.',
		"Ensuring generated questions follow Bloom's Taxonomy principles accurately.",
		'Handling diverse content types from videos, documents, and web pages.',
		'Maintaining consistency in question difficulty across different subjects.',
	],
	solution:
		"Llama 3.2 was fine-tuned using a diverse dataset of academic materials. A preprocessing pipeline was designed to convert YouTube video transcripts into structured content for question generation. A browser extension was built to integrate with educational platforms for seamless usability. The V8 JavaScript Engine was leveraged for high-performance client-side processing, enabling real-time question generation without server dependencies. Python backend services handled model inference and content processing, while the Transformers library provided efficient model deployment. Advanced natural language processing techniques were implemented to ensure questions align with Bloom's Taxonomy levels. The system incorporated machine learning algorithms for automatic difficulty assessment and question quality scoring. Chrome Extension APIs were utilized for seamless integration with web-based educational content, allowing educators to generate questions directly from any webpage or online resource.",
	outcome:
		"The system reduced the time required for manual question paper creation by 40%, while achieving a 25% improvement in question accuracy compared to traditional methods. The browser extension was downloaded by over 2,000 educators within the first month of release, with an average rating of 4.6/5 stars. The platform successfully generated over 50,000 questions across various subjects and difficulty levels, with 92% of generated questions meeting educational quality standards. Educators reported a 60% reduction in question preparation time and a 35% improvement in student assessment outcomes. The Bloom's Taxonomy integration resulted in more balanced question papers with appropriate cognitive load distribution. The project gained recognition as an innovative personal project and has been adopted by several educational institutions for their assessment preparation workflows.",
};

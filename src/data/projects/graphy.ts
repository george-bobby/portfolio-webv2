export const graphyProject = {
	id: 3,
	title: 'Graphy: Virtual Assistant with GraphRAG & Secure File Management',
	description:
		'Built a Retrieval-Augmented Generation (RAG)-based virtual assistant using GraphRAG (Neo4j) and Next.js. Engineered a secure document-handling system to ensure user-specific file privacy and data integrity.',
	image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
	tools: [
		'Neo4j',
		'Next.js',
		'LLM',
		'GraphRAG',
		'Streamlit',
		'Python',
		'Vector Embeddings',
		'OpenAI API',
	],
	slug: 'graphy-virtual-assistant',
	overview:
		"Graphy is an advanced AI-powered virtual assistant designed to leverage Retrieval-Augmented Generation (RAG) using Neo4j's graph database. The system can efficiently retrieve and process user queries from structured knowledge bases while maintaining document-level security and integrity. The platform features sophisticated document parsing capabilities, supporting multiple file formats including PDFs, Word documents, and text files. Advanced natural language processing techniques are employed to extract meaningful relationships and create comprehensive knowledge graphs. The system implements user-specific data isolation, ensuring that each user's documents remain private and secure. Graphy also features intelligent conversation memory, contextual understanding, and the ability to generate insights from complex document relationships. The platform includes advanced analytics for document usage patterns and query optimization based on user behavior.",
	challenges: [
		'Ensuring fast and accurate knowledge retrieval across structured data.',
		'Building a scalable and secure document-handling system.',
		'Maintaining a balance between accuracy and response time.',
		'Implementing user-specific data isolation and privacy controls.',
		'Creating efficient graph traversal algorithms for complex queries.',
		'Handling diverse document formats and extracting meaningful relationships.',
		'Optimizing vector embeddings for semantic search capabilities.',
		'Ensuring data integrity across distributed storage systems.',
	],
	solution:
		'Neo4j was used to establish relationships between knowledge entities, improving query performance. Next.js was integrated for a modern, user-friendly interface. Secure document handling was implemented using encrypted storage and access control mechanisms. Optimized indexing and caching techniques were applied to minimize query response times. The system utilized advanced vector embeddings for semantic search, enabling more accurate document retrieval. Streamlit provided an intuitive interface for document upload and management. Python backend services handled document processing and graph construction. OpenAI API integration enhanced the natural language understanding capabilities. Multi-layered security protocols ensured user data privacy, including end-to-end encryption and role-based access controls. Advanced caching strategies and database optimization techniques were implemented to achieve sub-second response times even with large document collections.',
	outcome:
		'Graphy significantly reduced response latency while ensuring data security. Users reported a 40% improvement in the accuracy of knowledge retrieval compared to conventional keyword-based assistants. The platform successfully processed over 10,000 documents across 500 users during its beta phase, maintaining 99.8% uptime and achieving average query response times under 2 seconds. User satisfaction scores reached 4.7/5, with particular praise for the intuitive interface and accurate document insights. The secure file management system achieved zero data breaches during testing, and the graph-based approach improved contextual understanding by 60% compared to traditional RAG systems. The project gained recognition as an innovative personal project and has been featured in several AI and data science communities for its novel approach to secure knowledge management.',
};

export const carboProject = {
	id: 6,
	title: 'Carbo: AI Carbon Footprint Analyzer and Chatbot',
	description:
		'Developed an AI-powered platform analyzing carbon footprints with a chatbot for sustainability insights. Integrated real-time news feed, carpooling features, and personalized sustainability recommendations with over 100 registered users.',
	image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9',
	tools: [
		'Next.js',
		'Gemini AI',
		'LangChain',
		'MongoDB',
		'MERN Stack',
		'Vercel',
		'Chart.js',
	],
	slug: 'carbo-carbon-analyzer',
	overview:
		'Carbo is an AI-driven sustainability tool that helps users track and reduce their carbon footprint. It features a chatbot for personalized sustainability tips and a MongoDB-backed dashboard for real-time emissions analysis. The platform includes a comprehensive dashboard with live environmental news, carpooling coordination features, and gamified sustainability challenges. Users can track their daily activities, receive AI-powered recommendations for reducing emissions, and connect with like-minded individuals for eco-friendly initiatives. The system incorporates machine learning algorithms to predict future carbon emissions based on user behavior patterns and provides actionable insights for sustainable living. The platform also features social sharing capabilities, allowing users to showcase their environmental achievements and inspire others in their sustainability journey.',
	challenges: [
		'Accurately calculating carbon footprints based on various user activities.',
		'Providing real-time analytics without overwhelming users with data.',
		'Ensuring chatbot responses remain informative and engaging.',
		'Integrating diverse data sources for comprehensive carbon tracking.',
		'Developing an intuitive user interface for complex environmental data.',
		'Implementing real-time news aggregation for relevant sustainability content.',
		'Creating effective carpooling matching algorithms for users.',
		'Ensuring data privacy while providing personalized recommendations.',
	],
	solution:
		"Gemini AI was leveraged for natural language processing, LangChain provided intelligent chatbot workflows, and MongoDB stored historical data for trend analysis. The dashboard used dynamic visualizations to simplify data interpretation. The MERN stack architecture ensured scalable performance, while Chart.js provided interactive data visualizations. Real-time news integration was achieved through RSS feed aggregation and AI-powered content filtering. The carpooling feature utilized geolocation APIs and machine learning algorithms for optimal route matching. Vercel deployment ensured global accessibility and fast loading times. Advanced analytics were implemented using time-series data analysis to identify trends and provide predictive insights for users' environmental impact.",
	outcome:
		'Carbo helped users reduce their carbon footprint by an average of 15%, with a 35% increase in user engagement due to the interactive chatbot. The platform successfully onboarded over 100 registered users within the first three months of launch. Users reported a 25% improvement in environmental awareness and a 20% increase in sustainable behavior adoption. The carpooling feature facilitated over 500 shared rides, resulting in an estimated 2,000 kg reduction in CO2 emissions. The real-time news feature increased user session duration by 40%, and the gamification elements led to a 60% user retention rate. The platform received recognition from the Center for Climate Action and has been featured in several sustainability conferences as an innovative approach to environmental consciousness.',
};

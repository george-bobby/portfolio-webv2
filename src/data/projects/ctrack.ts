export const ctrackProject = {
	id: 8,
	title: 'C Track - Campus Navigation With Precision',
	description:
		'Developed a campus navigation system that uses image recognition to detect user location, trained on a manually curated dataset.',
	image: 'https://images.unsplash.com/photo-1562774053-701939374585',
	tools: [
		'Next.js',
		'Flask',
		'Image Classification',
		'Computer Vision',
		'Machine Learning',
	],
	slug: 'ctrack-campus-navigation',
	overview:
		'C Track is an innovative campus navigation solution that revolutionizes how students and visitors navigate university campuses. The system combines cutting-edge image recognition technology with interactive mapping to provide real-time location detection and path guidance. Built using Next.js for the frontend and Flask for the backend, the platform features a fine-tuned image classification model trained on a manually curated dataset of campus landmarks and locations. The system provides turn-by-turn navigation, points of interest discovery, and accessibility-friendly route options for users with different mobility needs.',
	challenges: [
		'Creating a comprehensive dataset of campus images for accurate location detection.',
		'Training an image classification model that works reliably in different lighting conditions.',
		'Implementing real-time path guidance that adapts to campus layout changes.',
		'Ensuring accurate GPS-free indoor navigation using visual landmarks.',
		'Optimizing model performance for mobile devices with limited computational resources.',
		'Handling edge cases where image recognition might fail or provide ambiguous results.',
	],
	solution:
		'The solution involved manually curating a diverse dataset of over 10,000 campus images covering various weather conditions, times of day, and seasonal changes. A custom convolutional neural network was fine-tuned using transfer learning from pre-trained models to achieve high accuracy in landmark recognition. The Flask backend processes image inputs in real-time and returns location coordinates, which are then used by the Next.js frontend to display interactive maps with optimal routing. The system includes fallback mechanisms using GPS when available and crowd-sourced location verification to improve accuracy over time.',
	outcome:
		'C Track achieved 92% accuracy in location detection across different campus conditions and reduced navigation time for new students by 65%. The platform successfully guided over 5,000 users during its pilot phase, with 89% user satisfaction ratings. The system significantly improved campus accessibility for visually impaired users through voice-guided navigation features. The project received recognition from the Industry Institute Interaction Cell and has been adopted as the official campus navigation tool, leading to a 40% reduction in late arrivals to classes and meetings.',
};

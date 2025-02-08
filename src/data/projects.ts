export const projectsdata = [
  {
    id: 1,
    title: "Scalable E-Commerce Platform for CaraExim",
    description:
      "Designed and optimized a scalable e-commerce platform using the MERN stack, aiding deployment and maintenance.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tools: ["MongoDB", "Express.js", "React", "Node.js"],
    slug: "caraexim-ecommerce",
    overview:
      "CaraExim required a robust and scalable e-commerce platform to support wholesale transactions efficiently. The platform needed to handle high traffic, multiple user roles, and seamless inventory management. The system was built using the MERN stack, ensuring a modern and responsive UI while maintaining a powerful backend. Features included real-time order tracking, a secure payment gateway, role-based authentication, and an automated invoicing system.",
    challenges: [
      "Ensuring high performance under large-scale wholesale transactions.",
      "Implementing real-time inventory updates across multiple vendors.",
      "Optimizing database queries to reduce load times for product searches.",
      "Enhancing security measures for transactions and user data.",
    ],
    solution:
      "The platform utilized MongoDB for handling large data sets efficiently, Express.js for a streamlined backend, React for an intuitive frontend, and Node.js for optimized API handling. A caching mechanism was implemented to enhance search performance, and secure authentication was managed through JWT tokens. An AI-driven recommendation system was introduced to suggest relevant products based on user purchase history.",
    outcome:
      "The solution improved transaction processing efficiency by 25%, significantly reducing manual order management time. Additionally, users experienced a 30% increase in satisfaction due to improved UX and faster load times. The platform successfully scaled to accommodate growing business needs.",
  },
  {
    id: 2,
    title: "Cluster: University Collaboration Platform",
    description:
      "Implemented AI-driven features for personalized project recommendations and academic collaborations.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tools: ["Next.js", "MongoDB", "AI Models"],
    slug: "cluster-platform",
    overview:
      "Cluster is an academic networking platform designed to connect university students and faculty for collaborative projects and research initiatives. The AI-driven recommendation engine intelligently suggests projects, research papers, and potential collaborators based on user interests, skills, and previous work. The system also features a discussion forum, a centralized research repository, and real-time event updates.",
    challenges: [
      "Developing an AI-based matchmaking system to suggest relevant projects.",
      "Ensuring real-time collaboration features for researchers and students.",
      "Managing a growing database while keeping retrieval times low.",
      "Implementing a secure access control system to protect sensitive research data.",
    ],
    solution:
      "To address these challenges, a hybrid AI recommendation engine was implemented using collaborative and content-based filtering techniques. The platform was built with Next.js for a responsive frontend and MongoDB for scalable data management. A real-time chat system with WebSockets was integrated for seamless communication. Role-based authentication and encryption were added to secure user data.",
    outcome:
      "The implementation led to a 20% increase in successful collaborations between students and faculty, improving academic engagement. The AI-driven recommendations significantly reduced time spent searching for relevant projects, and the user base grew rapidly due to positive feedback from early adopters.",
  },
  {
    id: 3,
    title: "Graphy: Virtual Assistant Using GraphRAG",
    description:
      "Developed a virtual assistant with Retrieval Augmented Generation (RAG) and Next.js, featuring a secure document management system.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tools: ["Neo4j", "Next.js", "LLM", "GraphRAG"],
    slug: "graphy-virtual-assistant",
    overview:
      "Graphy is an advanced AI-powered virtual assistant designed to leverage Retrieval-Augmented Generation (RAG) using Neo4j’s graph database. The system can efficiently retrieve and process user queries from structured knowledge bases while maintaining document-level security and integrity.",
    challenges: [
      "Ensuring fast and accurate knowledge retrieval across structured data.",
      "Building a scalable and secure document-handling system.",
      "Maintaining a balance between accuracy and response time.",
    ],
    solution:
      "Neo4j was used to establish relationships between knowledge entities, improving query performance. Next.js was integrated for a modern, user-friendly interface. Secure document handling was implemented using encrypted storage and access control mechanisms. Optimized indexing and caching techniques were applied to minimize query response times.",
    outcome:
      "Graphy significantly reduced response latency while ensuring data security. Users reported a 40% improvement in the accuracy of knowledge retrieval compared to conventional keyword-based assistants.",
  },
  {
    id: 4,
    title: "Eventtts: Event Management App for CHRIST University",
    description:
      "Developed a Next.js event management web app with a timetable, calendar, and nested events.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tools: ["Next.js", "MongoDB"],
    slug: "eventtts-management",
    overview:
      "Eventtts is a comprehensive event management system tailored for CHRIST University, allowing students and faculty to create, manage, and track events with a user-friendly interface.",
    challenges: [
      "Designing a system that supports nested events within main events.",
      "Implementing an interactive timetable with real-time updates.",
      "Optimizing database queries for quick event retrieval and updates.",
    ],
    solution:
      "Next.js was chosen for its server-side rendering capabilities, ensuring quick loading times. MongoDB was used to structure events efficiently with a nested document approach. The app included a drag-and-drop event scheduler and real-time push notifications for updates.",
    outcome:
      "The system streamlined event organization, increasing event participation by 30% and reducing scheduling conflicts through efficient real-time updates.",
  },
  {
    id: 5,
    title: "QnsAI: Automated Question Paper Generation",
    description:
      "Implemented customizable question paper generation using Fine-Tuned Llama 3.2, supporting multiple input formats.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tools: ["Llama 3.2", "JavaScript", "QTI", "YouTube API"],
    slug: "qnsai-auto-question",
    overview:
      "QnsAI automates the process of question paper generation using a fine-tuned Llama 3.2 model. The platform allows educators to create question papers based on Bloom’s Taxonomy, with customizable difficulty levels and support for various input formats, including text, documents, and YouTube video transcripts.",
    challenges: [
      "Developing an AI model capable of generating contextually appropriate questions.",
      "Ensuring question quality aligns with educational standards.",
      "Supporting multiple input formats while maintaining accuracy.",
    ],
    solution:
      "Llama 3.2 was fine-tuned using a diverse dataset of academic materials. A preprocessing pipeline was designed to convert YouTube video transcripts into structured content for question generation. A browser extension was built to integrate with educational platforms for seamless usability.",
    outcome:
      "The system reduced the time required for manual question paper creation by 40%, while achieving a 25% improvement in question accuracy compared to traditional methods.",
  },
  {
    id: 6,
    title: "Carbo: AI Carbon Footprint Analyzer and Chatbot",
    description:
      "Developed an AI-powered platform analyzing carbon footprints with a chatbot for sustainability insights.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tools: ["Next.js", "Gemini AI", "LangChain", "MongoDB"],
    slug: "carbo-carbon-analyzer",
    overview:
      "Carbo is an AI-driven sustainability tool that helps users track and reduce their carbon footprint. It features a chatbot for personalized sustainability tips and a MongoDB-backed dashboard for real-time emissions analysis.",
    challenges: [
      "Accurately calculating carbon footprints based on various user activities.",
      "Providing real-time analytics without overwhelming users with data.",
      "Ensuring chatbot responses remain informative and engaging.",
    ],
    solution:
      "Gemini AI was leveraged for natural language processing, LangChain provided intelligent chatbot workflows, and MongoDB stored historical data for trend analysis. The dashboard used dynamic visualizations to simplify data interpretation.",
    outcome:
      "Carbo helped users reduce their carbon footprint by an average of 15%, with a 35% increase in user engagement due to the interactive chatbot.",
  },
];

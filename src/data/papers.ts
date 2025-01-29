const papers = [
  {
    title: "Exploring AI in Education: A Comparative Study",
    abstract:
      "This paper explores the potential of AI in question paper generation using models like LSA, Word2Vec, and Seq2Seq to achieve better accuracy and automation. The study compares different approaches and presents a comprehensive analysis of their effectiveness in educational contexts.",
    authors: ["George Bobby", "Dr. Jayapandiyan N"],
    publishedDate: "March 2024",
    publication: "Springer",
    tags: ["Tensorflow", "NLP", "LSA", "Word2Vec", "Seq2Seq"],
    slug: "ai-education-comparative-study",
    sections: {
      problem:
        "Traditional question paper generation is time-consuming and may not cover all learning objectives effectively.",
      methodology:
        "We implemented and compared three different approaches: LSA, Word2Vec, and Seq2Seq models.",
      results:
        "The Seq2Seq model showed a 15% improvement in question relevance compared to traditional methods.",
      conclusion:
        "AI-powered question generation shows promising results for automating and improving educational assessment.",
    },
  },
  {
    title: "GraphRAG and Blockchain: Enhancing Data Integrity and Retrieval",
    abstract:
      "This research explores the integration of GraphRAG with blockchain technology to improve data retrieval and ensure immutability. The study focuses on leveraging knowledge graphs for efficient query resolution while maintaining decentralized trust using blockchain.",
    authors: ["George Bobby", "Dr. Ramesh K"],
    publishedDate: "April 2025",
    publication: "IEEE Xplore",
    tags: ["GraphRAG", "Blockchain", "Neo4j", "Smart Contracts", "LLMs"],
    slug: "graphrag-blockchain-data-integrity",
    sections: {
      problem:
        "Existing retrieval systems lack transparency and are susceptible to data manipulation, limiting trust in AI-driven applications.",
      methodology:
        "We propose a hybrid approach combining GraphRAG for efficient knowledge retrieval and blockchain for data integrity verification.",
      results:
        "Our approach reduces data tampering risks by 40% and improves retrieval accuracy in decentralized AI applications.",
      conclusion:
        "The integration of GraphRAG and blockchain enhances security, reliability, and efficiency in AI-powered knowledge systems.",
    },
  },
];

export default papers;

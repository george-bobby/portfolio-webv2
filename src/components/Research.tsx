import ResearchCard from "./ResearchCard";

const Research = () => {
  // Demo content - in a real app, this would come from an API or CMS
  const paper = {
    title: "Exploring AI in Education: A Comparative Study",
    abstract: "This paper explores the potential of AI in question paper generation using models like LSA, Word2Vec, and Seq2Seq to achieve better accuracy and automation.",
    tags: ["AI", "NLP", "LSA", "Seq2Seq"],
    slug: "ai-education-comparative-study",
  };

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">Research</h2>
        <ResearchCard {...paper} />
      </div>
    </section>
  );
};

export default Research;
import { Card } from "@/components/ui/card";

const Bookings = () => {
  return (
    <section className="section-padding container">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-8 animate-fade-up">
          Schedule a Meeting
        </h2>
        <Card className="p-6 animate-fade-up">
          <iframe 
            src="https://calendar.online/9f9ff5562051f8eda0db?iframe=true"
            className="w-full h-[500px] rounded-lg"
            frameBorder="0"
            title="Booking Calendar"
          />
        </Card>
      </div>
    </section>
  );
};

export default Bookings;
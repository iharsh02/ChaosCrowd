export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "Sarah Johnson", role: "Project Creator", quote: "ChaosCrowd helped me turn my passion project into reality. The support from the community was overwhelming!" },
    { id: 2, name: "Michael Chen", role: "Backer", quote: "I love discovering and supporting innovative ideas on CrowdFund. It's amazing to be part of bringing new projects to life." },
    { id: 3, name: "Emily Rodriguez", role: "Project Creator", quote: "The platform made it easy to share my vision and connect with people who believed in my cause." },
  ];

  return (
    <section className="bg-white dark:bg-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-8">
          What People Are Saying
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

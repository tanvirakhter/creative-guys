import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "Working with Creative Guys has been a game-changer for Herbal Heal. Their content strategy, visuals, and storytelling perfectly captured our brand’s essence — clean, authentic, and healing. Our engagement rate doubled within weeks.",
    author: "Trey Ndelle",
    role: "Co-Founder, Herbal Heal",
    gradient: "from-green-700 via-emerald-800 to-lime-900",
    backgroundImage: "/background-section1.png",
  },
  {
    content:
      "The team behind Trek Apparel couldn’t have asked for a better partner. From campaign ideas to full content production, everything was handled seamlessly. They understood our vision and helped us translate it into viral posts and strong brand identity.",
    author: "M. S. Foyez",
    role: "Founder, Trek Apparel",
    gradient: "from-indigo-900 via-purple-800 to-pink-600",
    backgroundImage: "/background-section2.png",
  },
  {
    content:
      "Our lounge’s social presence completely transformed after collaborating with them. The reels, static posts, and campaign direction made our brand look premium and consistent. They truly know how to blend aesthetics with marketing.",
    author: "Ash",
    role: "Founder, Naya Lounge",
    gradient: "from-purple-700 via-fuchsia-600 to-orange-500",
    backgroundImage: "/background-section3.png",
  },
  {
    content:
      "We were amazed by how quickly they understood our restaurant’s vibe and audience. Their creative direction, food videography, and strategy helped Sushi Wharf stand out in a competitive area like E14 — and sales have grown ever since.",
    author: "Ali C.",
    role: "Owner, Sushi Wharf",
    gradient: "from-orange-600 via-red-500 to-purple-600",
    backgroundImage: "/background-section1.png",
  },
];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png",
}: TestimonialProps) => {
  return (
    <div
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>

      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-12 bg-white relative"
      id="testimonials"
      ref={sectionRef}
    >
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
              04
            </span>
            <span>Testimonials</span>
          </div>
        </div>

        <h2 className="text-5xl font-display font-bold mb-12 text-left">
          What our partners say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              gradient={testimonial.gradient}
              backgroundImage={testimonial.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

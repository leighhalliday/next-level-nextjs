import Pricing from "src/components/pricing";
import Faq from "src/components/faq";
import Stats from "src/components/stats";
import Cta from "src/components/cta";
import Videos from "src/components/videos";
import Testimonial from "src/components/testimonial";
import VideoOverview from "src/components/videoOverview";

export default function Home() {
  return (
    <>
      <Pricing />
      <VideoOverview />
      <Stats />
      <Faq />
      <Testimonial
        testimonials={[
          {
            name: "Long Hui",
            quote:
              "I just finished the course and I have learned a lot. It was an awesome learning experience. Thank you!",
            role: "Developer at malaysiakini",
            website: "https://twitter.com/leelonghui",
          },
          {
            name: "Magnus Volkmann",
            quote:
              "Just finished your course. I learned a lot. Thank you! I like your teaching style, it's a lot of fun to follow!",
            role: "Team Lead at MediaMarktSaturn",
            website: "https://www.linkedin.com/in/magnus-volkmann/",
          },
        ]}
      />
      <Videos />
      <Testimonial
        testimonials={[
          {
            name: "Luciano Pierdona",
            quote:
              "I've just finished your course and it was amazing, I really learned a lot of new stuff, everything were well explained, you definitely need to create another course like this, congratulations and thank you!",
            role: "Software Engineer at Jumpstart",
            website: "https://twitter.com/lucianompjr/",
          },
          {
            name: "Coops",
            quote:
              "I really like your style of teaching, having the shell of the code ready to go (files/imports etc) and just needing to be uncommented makes it far easier to concentrate on the code we're writing.",
            role: "Full Stack Developer",
            website: "#",
          },
          {
            name: "Clay Whittaker",
            quote:
              "I hadn't used a number of these technologies before but found your tutorial very useful. Assuming that you've had contact with similar technologies before its very quick to pick up. By the end i found i was typing ahead as you were explaining what we were going to be doing next. I think that's proof that you're explaining the concepts well.",
            role: "Software Engineer at CB Water Polo",
            website: "https://www.linkedin.com/in/clayton-whittaker/",
          },
        ]}
      />
      <Cta />
    </>
  );
}

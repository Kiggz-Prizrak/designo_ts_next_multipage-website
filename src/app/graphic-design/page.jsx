import React from "react";

import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import ActivityCard from "@/components/ActivityCard";
import { ProjectCard } from "@/components/ProjectCard";

import { activities } from "@/variables";

const GraphicDesign = () => {

  const link = "/medias/graphic-design/desktop/";

  return (
    <main>
      <Banner
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are 
tailored to meet your business objectives.
"
      />
      <section className="activity_card_section">
        {activities.graphicDesign?.map((activity, index) => (
          <>
            <ActivityCard
              image={link + activity.picture}
              title={activity.name}
              description={activity.description}
            />
          </>
        ))}
      </section>
      <section className="project_card_section">
        <ProjectCard
          title="app design"
          imageLink="home"
          link="/app-design"
          image="image-app-design.jpg"
        />
        <ProjectCard
          title="web design"
          imageLink="home"
          link="/web-design"
          image="image-web-design-large.jpg"
        />
      </section>
      <ContactSection />
    </main>
  );
};

export default GraphicDesign;

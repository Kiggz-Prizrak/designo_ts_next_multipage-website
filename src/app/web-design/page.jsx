import React from 'react'

import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import ActivityCard from "@/components/ActivityCard";
import { ProjectCard } from "@/components/ProjectCard";

import { activities } from "@/variables";

const link = "/medias/web-design/desktop/";

const WebDesign = () => {
  return (
    <main>
      <Banner
        title="Web Design"
        description="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences.
"
      />
      <section className="activity_card_section">
        {activities.webDesign?.map((activity, index) => (
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
          title="graphic design"
          imageLink="home"
          link="/graphic-design"
          image="image-graphic-design.jpg"
        />
      </section>
      <ContactSection />
    </main>
  );
}

export default WebDesign

import { ProjectCard } from "@/components/ProjectCard";
import { HomeContactSection } from "@/components/ContactSection";

import BannerHome from "@/components/BannerHome";
import HomeIconCard from "@/components/HomeIconCard";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  // console.log(BannerHome)
  return (
    <main>
      <BannerHome />
      <div className="projectCard_section">

        <ProjectCard
          title="web design"
          link="web-design"
          imageLink="home"
          image="image-web-design-large.jpg"
        />
        <div className="projectCard_horizontal">
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
        </div>
      </div>

      <div className="homeIconCard_Section">
        <HomeIconCard
          icon="Passionnate"
          title="PASSIONATE"
          description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        />
        <HomeIconCard
          icon="Ressourceful"
          title="RESOURCEFUL"
          description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        />
        <HomeIconCard
          icon="Friendly"
          title="FRIENDLY"
          description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        />
      </div>
      <ContactSection />
    </main>
  );
}

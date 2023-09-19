import Image from "@/components/Image";
import Arrow from "@/assets/icons/Arrow";

export const ProjectCard = ({ title, image, link }) => {
  return (
    <div className="projectCard_container">
      <Image image={image} link={link} />
      <div className="projectCard_text">
        <h2>{title}</h2>
        <button>
          View project <Arrow />
        </button>
      </div>
    </div>
  );
};

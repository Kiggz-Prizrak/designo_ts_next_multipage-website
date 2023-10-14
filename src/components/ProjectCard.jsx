import Image from "@/components/Image";
import Arrow from "@/assets/icons/Arrow";
import Link from "next/link";


export const ProjectCard = ({ title, image, imageLink, link }) => {
  return (
    <div className="projectCard_container">
      <Image image={image} link={imageLink} />
      <div className="projectCard_text">
        <h2>{title}</h2>
        <button className="transparent_btn">
          <Link href={link}>
            View project <Arrow />
          </Link>
        </button>
      </div>
    </div>
  );
};

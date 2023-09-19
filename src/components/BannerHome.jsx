import BackgroundCircle from "@/assets/icons/BackgroundCircle";
import Image from "@/components/Image";
// import Image from "next/image";

const BannerHome = () => {
  return (
    <div className="bannerHome_container banner_container">
      <span>
        {/* BackgroundCircle est le cercle de fond */}
        <BackgroundCircle />
      </span>
      <div className="bannerHome_layout banner_layout">
        <div className="bannerHome_content">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="button_on_dark">Learn More</button>
        </div>
        {/* l'image que j'importe avec javascript */}
        <Image link="home" image="image-hero-phone.png" />
      </div>
    </div>
  );
};

export default BannerHome;

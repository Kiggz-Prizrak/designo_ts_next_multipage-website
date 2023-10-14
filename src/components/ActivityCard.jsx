import React from "react";

import Image from "next/image";

const ActivityCard = ({ image, title, description }) => {
  return (
    <div className="activityCard_container">
      <Image
        src={image}
        width={350}
        height={320}
        style={{
          objectFit: "cover",
        }}
        sizes="(max-width: 500px) 100vw, 
       
        "
        // // (min-width: 501px) 50vw, 35vw
      />
      <div className="activityCard_text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;




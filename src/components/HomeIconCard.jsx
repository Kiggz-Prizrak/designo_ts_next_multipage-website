"use client";

import IllustrationFriendlyIcon from "@/assets/icons/IllustrationFriendlyIcon";
import IllustrationPassionnateIcon from "@/assets/icons/IllustrationPassionnateIcon";
import IllustrationResourcefulIcon from "@/assets/icons/IllustrationResourcefulIcon";

import { useState } from "react";

const HomeIconCard = ({ icon, title, description }) => {
  const [currentIcon, setCurrentIcon] = useState("");

  // console.log(icon);

  // switch (icon) {
  //   case "Friendly":
  //     setCurrentIconturn(IllustrationFriendlyIcon);
  //   case "Passionnate":
  //     setCurrentIcon(IllustrationPassionnateIcon);
  //   case "Ressourceful":
  //     setCurrentIcon(IllustrationResourcefulIcon);
  //   default:
  //     "";
  // }

  return (
    <div className="homeIconCard_container">
      {icon === "Friendly" ? (
        <>
          <IllustrationFriendlyIcon />
        </>
      ) : (
        ""
      )}
      {icon === "Passionnate" ? (
        <>
          <IllustrationPassionnateIcon />
        </>
      ) : (
        ""
      )}
      {icon === "Ressourceful" ? (
        <>
          <IllustrationResourcefulIcon />
        </>
      ) : (
        ""
      )}
      <div className="homeIconCard_text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomeIconCard;

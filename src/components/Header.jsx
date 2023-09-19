import { Logo } from "@/assets/icons/Logo";
import Link from "next/link";

import { navLinks } from "@/variables";


export const Header = () => {

  return (
    <header>
      <Link href="/">
        <Logo color="black"/>
      </Link>

      <nav>
        {navLinks.map((link, index) => {
          return <Link href={link?.path}>{link.name}</Link>;
        })}
      </nav>
    </header>
  );
};

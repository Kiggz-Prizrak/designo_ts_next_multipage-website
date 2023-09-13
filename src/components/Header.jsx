import { Logo } from "@/assets/icons/Logo";
import Link from "next/link";

export const Header = () => {
  const navLinks = [
    {
      name: "Our company",
      path: "/about",
    },
    {
      name: "Locations",
      path: "/locations",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header>
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        {navLinks.map((link, index) => {
          return <Link href={link?.path}>{link.name}</Link>;
        })}
      </nav>
    </header>
  );
};

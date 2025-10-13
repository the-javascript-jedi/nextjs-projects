import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import { NavLink } from "../nav-link/nav-link";

export default function MainHeader() {
  // const path = usePathname();
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>
      <nav className={classes.navList}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
            {/* <Link
              href="/meals"
              className={path.startsWith("/meals") ? classes.active : undefined}
            >
              Browse Meals
            </Link> */}
          </li>
          <li>
            <NavLink href="/community"> Foodies Community</NavLink>
            {/* <Link
              href="/community"
              className={path.startsWith("/meals") ? classes.active : undefined}
            >
              Foodies Community
            </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

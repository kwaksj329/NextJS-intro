import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  //   console.log(router);
  return (
    <nav className={styles.nav}>
      <Link legacyBehavior href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link legacyBehavior href="/about">
        <a
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
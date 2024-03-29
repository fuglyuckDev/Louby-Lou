import React from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import Burger from "../Burger/Burger";
import Link from "next/link";
import Book from "../Book/Book";

const Navigation = () => {
  let links = [
    { name: "HOME", target: "/" },
    { name: "ABOUT", target: "/about" },
    { name: "EVENTS", target: "/events" },
    { name: "SERVICES", target: "/services" },
    { name: "PRICING", target: "/pricing" },
    { name: "SHOP", target: "/shop" },
    { name: "GALLERY", target: "/gallery" },
  ];
  return (
    <div className={styles.container}>
      <Image
        alt="Louby Lou Logo"
        width={400}
        height={400}
        className={styles.logo}
        src={"/images/logos/louby_lou_white.webp"}
      ></Image>
      <ul className={styles.links}>
        {links.map((item, idx) => (
          <li key={idx}>
            <Link href={item.target} key={idx}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Burger />

      <Book type={"navigation"} button />
    </div>
  );
};

export default Navigation;

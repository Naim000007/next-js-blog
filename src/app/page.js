import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.png";
import Hero1 from "../../public/hero-img.webp";
import Button from "@/components/Button/Button";


export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Better design for your digital products.
          </h1>
          <p className={styles.desc}>
            Transforming Visions into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Button url="/portfolio" text="See Our Works" />
        </div>
        <div className={styles.item}>
          <Image src={Hero1} alt="" className={styles.img} />
        </div>
      </div>
    </>
  );
}

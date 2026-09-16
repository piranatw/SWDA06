import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src="/assets/bg-banner.png"
        alt=""
        fill
        className={styles.bannerImage}
      />

      <div className={styles.content}>
        <h1>where every event finds its venue</h1>

        <p>
          Discover the perfect venue for every occasion. From intimate
          gatherings to large celebrations, find a space that fits your event,
          style, and needs.
        </p>
      </div>
    </div>
  );
}

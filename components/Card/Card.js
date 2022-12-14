import styles from "./Card.module.css";
import Image from "next/image";

export default function Card(props) {
  return (
    <div className={styles.root}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.url}
        className={styles.item}
      >
        <div className={styles.image}>
          <Image src="/github.svg" alt={props.title} width={64} height={64} />
        </div>
        <div className={styles.details}>
          <h3 className={styles.detailsTitle}>{props.title}</h3>
          <p className={styles.detailInfo}>{props.lang}</p>
        </div>
      </a>
    </div>
  );
}

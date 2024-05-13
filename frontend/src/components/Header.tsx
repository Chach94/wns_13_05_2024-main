import Link from "next/link";
import styles from '@/styles/Header.module.css'; 

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.groupText}>
      <h1>Checkpoint : frontend</h1>
      <Link className={styles.lienText}href="/countries">Countries</Link>
      </div>
    </header>
  );
}

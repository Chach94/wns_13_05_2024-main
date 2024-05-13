import styles from '@/styles/Card.module.css'; 
import Link from 'next/link';
interface ICard {
    id:number; 
    name: string; 
    emoji: string; 
    code: string;
}
export default function Card({id, name, emoji,code}:ICard ) {
  return (
    <div className={styles.groupCard}>
    <Link href={`/countries/${code}`}>
     <h2 className={styles.groupText}>{name}</h2>
     <p className={styles.groupText}>{emoji}</p>
      </Link>
    </div>
  );
}

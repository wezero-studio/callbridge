import styles from './CTABanner.module.css';
import Link from 'next/link';

export default function CTABanner() {
    return (
        <div className={styles.banner}>
            <span className={styles.text}>Ready to grow your agency with high-quality live transfers?</span>
            <Link href="#contact" className={styles.btn}>Book a Demo</Link>
        </div>
    );
}

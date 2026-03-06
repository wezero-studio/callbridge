import styles from './MarketingSolutions.module.css';
import Link from 'next/link';

export default function MarketingSolutions() {
    return (
        <section className={styles.section}>
            <div className={styles.imageBox}>
                <div className={styles.imagePlaceholder}>🛁</div>
            </div>
            <div className={styles.content}>
                <span className={styles.tag}>Grow your business</span>
                <h2 className={styles.title}>MARKETING<br />SOLUTIONS</h2>
                <p className={styles.desc}>
                    Get your business noticed by our community of 2.6 million shoppers and turn interested browsers into new customers.
                </p>
                <Link href="#" className={styles.btnLime}>Learn More</Link>
            </div>
        </section>
    );
}

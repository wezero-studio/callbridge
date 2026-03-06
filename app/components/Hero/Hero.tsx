'use client';
import styles from './Hero.module.css';
import Link from 'next/link';

import Iridescence from '../Iridescence/Iridescence';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    EXCLUSIVE LIVE INSURANCE LEADS DELIVERED IN REAL TIME
                </h1>
                <p className={styles.heroSubtitle}>
                    Our trained agents qualify prospects and transfer them directly to you. Speak instantly with customers actively looking for coverage.
                </p>
                <Link href="#" className={styles.btnLime}>Book a Demo</Link>
                <div className={styles.heroStats}>
                    <div className={styles.heroStat}>
                        <div className={styles.heroStatValue}>120s+</div>
                        <div className={styles.heroStatLabel}>Avg Qualified Call</div>
                    </div>
                    <div className={styles.heroStat}>
                        <div className={styles.heroStatValue}>10k+</div>
                        <div className={styles.heroStatLabel}>Daily Lead Transfers</div>
                    </div>
                    <div className={styles.heroStat}>
                        <div className={styles.heroStatValue}>100%</div>
                        <div className={styles.heroStatLabel}>Exclusive</div>
                    </div>
                </div>
            </div>
            <div className={styles.heroImage}>
                <div className={styles.heroCard}>
                    <Iridescence
                        color={[0.95, 0.95, 0]}
                        mouseReact
                        amplitude={0.1}
                        speed={1}
                    />
                </div>
            </div>
        </section>
    );
}

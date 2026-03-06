import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <div>
                    <span className={styles.tag}>Performance Advantages</span>
                    <h2 className={styles.title}>WHY CHOOSE US</h2>
                </div>
                <p className={styles.desc}>
                    Work with a partner focused on delivering high-quality Medicare prospects through verified data, real-time transfers, and scalable lead generation.
                </p>
            </div>

            <div className={styles.grid}>
                {/* Column 1: Left stacked cards */}
                <div className={styles.colLeft}>
                    <div className={styles.card}>
                        <div className={styles.sweep} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Exclusive Live Transfers</h3>
                            <p className={styles.cardBody}>
                                Every call is delivered only to your agency.<br /><br />
                                No shared leads, no competition.<br /><br />
                                You connect directly with seniors who are actively interested in Medicare coverage.
                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.sweep} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Pre-Qualified Prospects</h3>
                            <p className={styles.cardBody}>
                                Before any transfer is made we verify:<br />
                                • Age eligibility<br />
                                • Geographic location<br />
                                • Medicare interest<br /><br />
                                This ensures your agents speak only with relevant, qualified prospects.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Column 2: Center/Right masonry mix */}
                <div className={styles.colRight}>
                    {/* Top row of right column: 2 small text pill cards + arrow icon cards block */}
                    <div className={styles.topRightRow}>
                        <div className={`${styles.card} ${styles.pillCard}`}>
                            <div className={styles.sweep} />
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitleCenter}>Scale</h3>
                            </div>
                        </div>
                        <div className={`${styles.card} ${styles.pillCard}`}>
                            <div className={styles.sweep} />
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitleCenter}>Your</h3>
                            </div>
                        </div>
                        <div className={styles.iconGrid}>
                            <div className={styles.iconCircle}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                            <div className={styles.iconCircle}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                            </div>
                            <div className={styles.iconCircle}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Bottom row of right column */}
                    <div className={styles.bottomRightRow}>
                        <div className={`${styles.card} ${styles.largeCenterCard}`}>
                            <div className={styles.sweep} />
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Real-Time Conversations</h3>
                                <p className={styles.cardBody}>
                                    Our system connects you with prospects the moment they request information.<br /><br />
                                    No waiting.<br />
                                    No cold follow-ups.<br /><br />
                                    Just high-intent prospects ready to talk.
                                </p>
                            </div>
                        </div>
                        <div className={styles.verticalBrandCard}>
                            <span>Brand</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

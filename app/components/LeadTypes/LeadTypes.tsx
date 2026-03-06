import styles from './LeadTypes.module.css';

const leads = [
    {
        img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80',
        title: 'Medicare Leads',
        desc: 'Speak directly with seniors actively searching for Medicare coverage. Pre-qualified, high-intent contacts ready for your agents.',
    },
    {
        img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&auto=format&fit=crop&q=80',
        title: 'ACA Leads',
        desc: 'Connect with individuals shopping for Affordable Care Act plans. Verified and ready for enrollment conversations with real buyers.',
    },
    {
        img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80',
        title: 'Final Expense Leads',
        desc: 'Reach families looking to secure financial peace of mind with final expense insurance. Pre-screened and highly motivated prospects.',
    },
];

export default function LeadTypes() {
    return (
        <section className={styles.section}>
            {/* Heading block — top-left */}
            <div className={styles.header}>
                <p className={styles.eyebrow}>What We Offer</p>
                <h2 className={styles.title}>LEAD TYPES</h2>
                <p className={styles.subtitle}>
                    Every lead we deliver is pre-qualified, high-intent,
                    and ready to convert — so your team only speaks to the right people.
                </p>
            </div>

            {/* Cards below heading — 3 columns */}
            <div className={styles.grid}>
                {leads.map((lead) => (
                    <div className={styles.card} key={lead.title}>
                        {/* Image — NO sweep here */}
                        <div className={styles.imgBox}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={lead.img} alt={lead.title} className={styles.img} />
                        </div>

                        {/* Text section */}
                        <div className={styles.textSection}>
                            <div className={styles.titleBox}>
                                <div className={styles.sweep} />
                                <span className={styles.cardTitle}>{lead.title}</span>
                            </div>

                            <div className={styles.descBox}>
                                <div className={styles.sweep} />
                                <p className={styles.cardDesc}>{lead.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

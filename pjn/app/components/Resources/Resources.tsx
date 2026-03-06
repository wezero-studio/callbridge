import styles from './Resources.module.css';
import Link from 'next/link';

/* 
  Using freely available Unsplash images.
  Chosen topics: call center (outbound calling), data/analytics (lead qualification), business deal (live transfer)
*/
const resources = [
    {
        img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=80',
        title: 'LIVE TRANSFER CALLS',
        desc: 'Learn how our real-time live transfer process connects pre-qualified prospects directly to your agents the moment interest is confirmed.',
        btnText: 'Read more',
        href: '#',
    },
    {
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
        title: 'LEAD QUALITY REPORT',
        desc: 'Explore how we verify every prospect using a rigorous qualification checklist — age, zip code, insurance interest and more — before any call is transferred.',
        btnText: 'Read more',
        href: '#',
    },
    {
        img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80',
        title: 'PARTNER ONBOARDING',
        desc: 'Get up and running quickly with our streamlined onboarding process. Learn how to configure your lead preferences, call volumes, and routing in minutes.',
        btnText: 'Read more',
        href: '#',
    },
];

export default function Resources() {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Get started with these resources</h2>
            <div className={styles.grid}>
                {resources.map((r) => (
                    <div className={styles.card} key={r.title}>
                        <div className={styles.cardImgBox}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={r.img} alt={r.title} className={styles.cardImg} />
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.cardTitleBox}>
                                <span className={styles.cardTitle}>{r.title}</span>
                            </div>
                            <div className={styles.cardDescBox}>{r.desc}</div>
                            <Link href={r.href} className={styles.cardBtn}>{r.btnText}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

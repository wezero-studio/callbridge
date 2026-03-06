import styles from './PaymentCards.module.css';
import Link from 'next/link';

interface ProblemSolutionCard {
    tag: string;
    title: string;
    description: string;
    image: string;
    href: string;
}

const cards: ProblemSolutionCard[] = [
    {
        tag: 'The Problem',
        title: 'Stop Wasting Time on Cold Calling',
        description:
            "Insurance agents spend hours dialing unqualified prospects. Our system connects you directly with people already interested in insurance coverage.",
        image: 'https://images.unsplash.com/photo-1551836022-b06985bceb24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        href: '#',
    },
    {
        tag: 'The Solution',
        title: 'Scale Your Book of Business',
        description:
            'Focus on closing deals rather than prospecting. We provide a steady stream of high-intent live transfers so you can grow your agency predictably.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        href: '#',
    },
];

export default function PaymentCards() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>WORK SMARTER,<br />NOT HARDER</h2>
                <p className={styles.desc}>
                    Expect more closed deals as you skip the prospecting and go straight to selling. We created our live transfer engine to help insurance agents drastically boost ROI.
                </p>
            </div>
            <div className={styles.grid}>
                {cards.map((card) => (
                    <div className={styles.card} key={card.title}>
                        <div className={styles.cardBody}>
                            <span className={styles.tag}>{card.tag}</span>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDesc}>{card.description}</p>
                            <Link href={card.href} className={styles.linkArrow}>Learn more</Link>
                        </div>
                        <div className={styles.cardImg}>
                            <img src={card.image} alt={card.title} className={styles.image} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

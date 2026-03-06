'use client';
import { useEffect, useRef } from 'react';
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
            "Insurance agents spend hours dialing unqualified prospects. Our system connects you directly with people already interested in insurance coverage. No more dead ends, just high-intent conversations.",
        image: 'https://images.unsplash.com/photo-1551836022-b06985bceb24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        href: '#',
    },
    {
        tag: 'The Solution',
        title: 'Scale Your Book of Business',
        description:
            'Focus on closing deals rather than prospecting. We provide a steady stream of high-intent live transfers so you can grow your agency predictably and efficiently. Your time is valuable—spend it where it counts.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        href: '#',
    },
];

export default function PaymentCards() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            cardRefs.current.forEach((card) => {
                if (!card) return;

                const rect = card.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Animation starts when card is ~10% visible; fully spread when 65% visible.
                const start = windowHeight * 0.9;
                const end = windowHeight * 0.35;

                let progress = (start - rect.top) / (start - end);
                progress = Math.max(0, Math.min(1, progress));

                card.style.setProperty('--scroll-progress', progress.toString());
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.stickyContainer}>
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <span className={styles.eyebrow}>Why It Works</span>
                        <h2 className={styles.title}>WORK SMARTER,<br />NOT HARDER</h2>
                    </div>
                    <p className={styles.desc}>
                        Expect more closed deals as you skip the prospecting and go straight to selling. We created our live transfer engine to help insurance agents drastically boost ROI and focus on what they do best: closing.
                    </p>
                </div>

                <div className={styles.cardsContainer}>
                    {cards.map((card, index) => (
                        <div
                            className={styles.card}
                            key={card.title}
                            ref={(el) => { cardRefs.current[index] = el }}
                        >
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDesc}>{card.description}</p>
                            </div>
                            <div className={styles.cardImgWrapper}>
                                <div className={styles.cardImg}>
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className={styles.image}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

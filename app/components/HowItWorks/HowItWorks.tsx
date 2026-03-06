'use client';
import { useEffect, useRef, useCallback } from 'react';
import styles from './HowItWorks.module.css';

const PhoneIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a15.998 15.998 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
);
const SearchIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);
const CheckIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
const RocketIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M15 12v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const CARDS = [
    {
        label: '1 — Outreach',
        Icon: PhoneIcon,
        desc: 'Our trained US-based call center agents proactively contact potential prospects, identifying decision-makers and initiating meaningful conversations at scale.',
        step: 'STEP 1',
        bg: '#F0EDE6',
        color: '#000',
        valueSize: 'clamp(72px, 10vw, 140px)',
    },
    {
        label: '2 — Qualification',
        Icon: SearchIcon,
        desc: 'We rigorously verify key qualifying details including age, zip code, and insurance interest to ensure every lead meets your exact criteria before you ever pick up the phone.',
        step: 'STEP 2',
        bg: '#E2E0D8',
        color: '#000',
        valueSize: 'clamp(72px, 10vw, 140px)',
    },
    {
        label: '3 — Interest Confirmed',
        Icon: CheckIcon,
        desc: 'Once the prospect clearly and verbally confirms their interest in your product or service, the call is flagged, reviewed, and prepared for an immediate live transfer to your team.',
        step: 'STEP 3',
        bg: '#2a2a2a',
        color: '#fff',
        valueSize: 'clamp(72px, 10vw, 140px)',
    },
    {
        label: '4 — Live Transfer',
        Icon: RocketIcon,
        desc: 'The fully qualified, interested prospect is transferred directly to your phone in real time — no delays, no cold leads, just warm conversations with people ready to buy.',
        step: 'STEP 4',
        bg: '#C8C5B0',
        color: '#000',
        valueSize: 'clamp(72px, 10vw, 140px)',
    },
];

// Each card gets this many pixels of scroll travel to animate into view
const SCROLL_PER_CARD = 800;
// Peek strip height — how much of the card below shows above the incoming card
const PEEK = 80; // px

export default function HowItWorks() {
    const outerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const updateCards = useCallback(() => {
        if (!outerRef.current) return;
        const sectionTop = outerRef.current.getBoundingClientRect().top;
        // sectionTop < 0 means we've scrolled into the section
        const scrolled = -sectionTop; // 0 at start of section, positive as we scroll down

        // Cache stage height outside the loop to prevent layout thrashing on scroll
        const stageEl = outerRef.current.querySelector<HTMLDivElement>('[data-stage]');
        const stageHeight = stageEl?.offsetHeight ?? 700;

        CARDS.forEach((_, i) => {
            const el = cardRefs.current[i];
            if (!el) return;

            // Card 1 starts exactly at 0.
            // Card 2 starts after just a short 200px gap.
            // Cards 3 and 4 follow sequentially after.
            const start = i === 0 ? 0 : 200 + (i - 1) * SCROLL_PER_CARD;
            const t = Math.max(0, Math.min(1, (scrolled - start) / SCROLL_PER_CARD));

            // Card 0 is always visible (translateY: 0 from start)
            // Card i slides up from 100% of stage height to its final stacked position
            // Final position: each card is offset by PEEK * i from the top of the stage
            // The card enters from below (100% height) and settles at its peek offset
            const finalTop = PEEK * i; // px from top of stage where card settles
            const startTranslate = stageHeight - PEEK * i; // enters from bottom
            const translateY = startTranslate * (1 - t);

            el.style.transform = `translateY(${i === 0 ? 0 : translateY}px)`;
        });
    }, []);

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateCards();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateCards(); // run on mount
        return () => window.removeEventListener('scroll', onScroll);
    }, [updateCards]);

    // Total section height = 200px explicit dwell + (cards-1) × scroll-per-card
    //   + 100svh to compensate for sticky stage height
    //   + 200px dwell so all 4 cards stay visible briefly before the section exits
    const totalScrollTrack = 200 + (CARDS.length - 1) * SCROLL_PER_CARD;

    return (
        <div ref={outerRef} className={styles.outerWrapper} style={{ height: `calc(${totalScrollTrack}px + 100svh + 200px)` }}>
            {/* Sticky stage that stays pinned while outer scrolls */}
            <div className={styles.stage} data-stage>
                <div className={styles.header}>
                    <h2 className={styles.title}>HOW IT WORKS</h2>
                </div>

                <div className={styles.cardStack}>
                    {CARDS.map((card, i) => (
                        <div
                            key={card.step}
                            ref={el => { cardRefs.current[i] = el; }}
                            className={styles.stickyCard}
                            style={{
                                background: card.bg,
                                color: card.color,
                                zIndex: i + 1,
                                top: `${PEEK * i}px`,
                                // Cards 2-4 start off-screen below; Card 1 starts visible
                                transform: i === 0 ? 'translateY(0)' : `translateY(100%)`,
                            }}
                        >
                            <div className={styles.top}>
                                <span className={styles.cardLabel}>{card.label}</span>
                                <span className={styles.cardIcon}><card.Icon /></span>
                            </div>
                            <div
                                className={styles.cardValue}
                                style={{ color: card.color, fontSize: card.valueSize }}
                            >
                                {card.step}
                            </div>
                            <p className={styles.cardDesc}>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

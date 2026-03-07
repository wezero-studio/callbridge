'use client';
import { useEffect, useRef, useCallback } from 'react';
import styles from './HowItWorks.module.css';

const PhoneIcon = () => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="#000">
        <path d="M31.129 23.072c-0.118-0.743-0.365-1.409-0.719-2.004l0.014 0.026c-0.189-0.31-0.502-0.529-0.868-0.589l-0.007-0.001-8.969-1.424c-0.056-0.009-0.12-0.013-0.185-0.013-0.348 0-0.664 0.138-0.895 0.363l0-0c-0.605 0.609-1.094 1.334-1.429 2.14l-0.016 0.044c-3.506-1.573-6.252-4.319-7.785-7.729l-0.039-0.097c0.849-0.351 1.574-0.839 2.182-1.445l-0 0c0.226-0.226 0.366-0.539 0.366-0.885 0-0.069-0.006-0.137-0.017-0.204l0.001 0.007-1.423-8.97c-0.061-0.374-0.281-0.688-0.587-0.873l-0.006-0.003c-0.546-0.327-1.185-0.568-1.866-0.684l-0.033-0.005c-0.349-0.078-0.75-0.122-1.161-0.122-0.024 0-0.047 0-0.071 0l0.004-0h-0.010c-3.772 0.028-6.821 3.081-6.844 6.851v0.002c0.015 13.037 10.579 23.601 23.615 23.616h0.001c3.776-0.022 6.831-3.076 6.854-6.849v-0.002c0.001-0.029 0.001-0.063 0.001-0.098 0-0.373-0.039-0.737-0.114-1.088l0.006 0.034zM24.383 28.576c-11.657-0.013-21.103-9.459-21.116-21.115v-0.001c0.019-2.399 1.961-4.338 4.359-4.354h0.001c0.010-0 0.023-0 0.035-0 0.249 0 0.492 0.027 0.726 0.079l-0.022-0.004c0.233 0.039 0.438 0.093 0.635 0.163l-0.025-0.008 1.21 7.634c-0.516 0.379-1.135 0.651-1.807 0.768l-0.026 0.004c-0.591 0.107-1.033 0.618-1.033 1.232 0 0.146 0.025 0.286 0.071 0.416l-0.003-0.009c1.824 5.217 5.859 9.252 10.951 11.038l0.125 0.038c0.121 0.043 0.261 0.067 0.407 0.067 0.234 0 0.452-0.063 0.64-0.174l-0.006 0.003c0.311-0.184 0.532-0.492 0.597-0.854l0.001-0.008c0.121-0.698 0.393-1.317 0.78-1.846l-0.009 0.012 7.633 1.211c0.068 0.193 0.129 0.425 0.17 0.663l0.004 0.026c0.037 0.177 0.057 0.381 0.057 0.589 0 0.024-0 0.048-0.001 0.073l0-0.004c-0.013 2.4-1.954 4.343-4.352 4.359h-0.002z" />
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
const SCROLL_PER_CARD = 500;
// Peek strip height — how much of the card below shows above the incoming card
// Reduced to 40px to give Card 4 significantly more room without shrinking Card 1
const PEEK = 40; // px

export default function HowItWorks() {
    const outerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const stageHeightRef = useRef(700);

    useEffect(() => {
        const updateDims = () => {
            if (outerRef.current) {
                const stageEl = outerRef.current.querySelector<HTMLDivElement>('[data-stage]');
                if (stageEl) {
                    stageHeightRef.current = stageEl.offsetHeight;
                }
            }
        };
        updateDims();
        window.addEventListener('resize', updateDims, { passive: true });
        return () => window.removeEventListener('resize', updateDims);
    }, []);

    const updateCards = useCallback(() => {
        if (!outerRef.current) return;
        const sectionTop = outerRef.current.getBoundingClientRect().top;
        // sectionTop < 0 means we've scrolled into the section
        const scrolled = -sectionTop; // 0 at start of section, positive as we scroll down

        // Cache stage height from resize listener to prevent layout thrashing on scroll
        const stageHeight = stageHeightRef.current;

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
            const translateY = Math.round(startTranslate * (1 - t) * 100) / 100;

            el.style.transform = `translate3d(0, ${i === 0 ? 0 : translateY}px, 0)`;
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

    // Add a short "dwell" on desktop so LeadTypes doesn't immediately cover Card 4
    const dwell = typeof window !== 'undefined' && window.innerWidth <= 640 ? 0 : 200;
    const totalScrollTrack = 200 + (CARDS.length - 1) * SCROLL_PER_CARD + dwell;
    // Match the CSS: stage is 86svh on mobile (<= 640px), 100svh on desktop
    const stageH = typeof window !== 'undefined' && window.innerWidth <= 640 ? '86svh' : '100svh';

    return (
        <section className={styles.section}>
            {/* --- DESKTOP VIEW (Sticky Stacking Cards) --- */}
            <div ref={outerRef} className={`${styles.outerWrapper} ${styles.desktopOnly}`} style={{ height: `calc(${totalScrollTrack}px + 100svh)` }}>
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
                                    transform: i === 0 ? 'translate3d(0, 0px, 0)' : `translate3d(0, 100%, 0)`,
                                }}
                            >
                                <div className={styles.top}>
                                    <span className={styles.cardLabel}>{card.label}</span>
                                    <span className={styles.cardIcon}><card.Icon /></span>
                                </div>
                                <p className={styles.cardDesc}>{card.desc}</p>
                                <div
                                    className={styles.cardValue}
                                    style={{ color: card.color, fontSize: card.valueSize }}
                                >
                                    {card.step}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- MOBILE VIEW (Simple Static Stack) --- */}
            <div className={styles.mobileOnly}>
                <div className={styles.mobileHeader}>
                    <h2 className={styles.title}>HOW IT WORKS</h2>
                </div>
                <div className={styles.mobileCardList}>
                    {CARDS.map((card) => (
                        <div
                            key={card.step}
                            className={styles.mobileCard}
                            style={{
                                background: card.bg,
                                color: card.color,
                            }}
                        >
                            <div className={styles.top}>
                                <span className={styles.cardLabel}>{card.label}</span>
                                <span className={styles.cardIcon}><card.Icon /></span>
                            </div>
                            <p className={styles.cardDesc}>{card.desc}</p>
                            <div
                                className={styles.cardValue}
                                style={{ color: card.color, fontSize: card.valueSize }}
                            >
                                {card.step}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

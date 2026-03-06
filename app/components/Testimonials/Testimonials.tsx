'use client';
import { useState } from 'react';
import styles from './Testimonials.module.css';

interface Testimonial {
    company: string;
    role: string;
    name: string;
    text: string;
    logoBg: string;
    logoText: string;
    logoColor?: string;
}

const testimonials: Testimonial[] = [
    {
        company: 'Apex Medicare Group',
        role: 'Agency Owner, Apex Medicare Group',
        name: 'Derek Johnson',
        text: "CallBridge transformed how we handle Medicare leads. The live transfers are exactly what they promise — qualified seniors, ready to talk, no time wasted. Our agents went from spending hours cold-calling to spending that time actually closing. Our close rate jumped by over 40% in the first month alone.",
        logoBg: '#111',
        logoText: 'AMG',
        logoColor: '#FFD700',
    },
    {
        company: 'SilverPath Insurance',
        role: 'Sales Director, SilverPath Insurance',
        name: 'Maria Castillo',
        text: "We tried several lead vendors before CallBridge. The difference is night and day. Every transfer we receive has been pre-screened for age eligibility and Medicare interest. Our agents are more confident, more productive, and we're seeing a real return on investment. I recommend CallBridge to every agency owner I know.",
        logoBg: '#111',
        logoText: 'SP',
        logoColor: '#fff',
    },
    {
        company: 'Heritage Senior Benefits',
        role: 'Managing Partner, Heritage Senior Benefits',
        name: 'Tom Bradley',
        text: "The no-contract model is what sold us initially, but the quality of leads is what kept us. We can pause, scale, and adjust our volume based on our team's capacity. CallBridge gives us full control, and every prospect we speak to has already expressed genuine interest. It's a completely different experience.",
        logoBg: '#1a1a00',
        logoText: 'HSB',
        logoColor: '#FFD700',
    },
    {
        company: 'BlueStar Health Partners',
        role: 'Operations Manager, BlueStar Health Partners',
        name: 'Rachel Simmons',
        text: "Real-time transfers mean real conversations. No chasing voicemails, no re-qualifying people who clicked an ad by accident. CallBridge verifies geography, Medicare interest, and age before any call reaches us. It's exactly the kind of precision our agency needs to grow efficiently.",
        logoBg: '#111',
        logoText: 'BSH',
        logoColor: '#4fc3f7',
    },
];

export default function Testimonials() {
    const [idx, setIdx] = useState(0);

    const handleNav = (direction: 'prev' | 'next') => {
        if (direction === 'next') {
            setIdx((p) => (p + 1) % testimonials.length);
        } else {
            setIdx((p) => (p - 1 + testimonials.length) % testimonials.length);
        }
    };

    const total = testimonials.length;

    return (
        <section className={styles.section}>
            <div className={styles.layout}>
                <div className={styles.left}>
                    <h2 className={styles.heading}>WHY BUSINESSES LOVE CALL BRIDGE</h2>
                    <div className={styles.navBtns}>
                        <button className={styles.navBtn} onClick={() => handleNav('prev')}>←</button>
                        <button className={styles.navBtn} onClick={() => handleNav('next')}>→</button>
                    </div>
                </div>
                <div className={styles.cardsWrapper}>
                    {testimonials.map((t, i) => {
                        // Calculate relative distance from current index
                        let dist = (i - idx + total) % total;

                        let positionClass = styles.posNext; // default for hidden right edge items

                        if (dist === 0) {
                            positionClass = styles.pos0; // Left visible
                        } else if (dist === 1) {
                            positionClass = styles.pos1; // Right visible
                        } else if (dist === total - 1) {
                            positionClass = styles.posPrev; // Just exited Left (down and back)
                        }

                        return (
                            <div className={`${styles.card} ${positionClass}`} key={i}>
                                <div className={styles.logo} style={{ background: t.logoBg }}>
                                    <span style={{ fontSize: 11, fontWeight: 800, color: t.logoColor }}>{t.logoText}</span>
                                </div>
                                <p className={styles.role}>{t.role}</p>
                                <h3 className={styles.name}>{t.name}</h3>
                                <p className={styles.text}>{t.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

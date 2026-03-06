import styles from './StatsCards.module.css';

interface StatCard {
    label: string;
    desc: string;
    value: string;
    icon: string;
    bg: string;
    textColor: string;
    valueSize?: string;
}

const stats: StatCard[] = [
    {
        label: 'Top Rated Transfer Service',
        desc: "We're committed to providing the highest quality leads. Our partners consistently rate our live transfers as the best in the industry.",
        value: '4.9/5',
        icon: '⭐',
        bg: '#F0EDE6',
        textColor: '#000',
    },
    {
        label: 'Live Transfer',
        desc: 'Our call centers operate 24/7. When a prospect is qualified and ready to buy, we connect them directly to your agents in real-time.',
        value: '9 SECS',
        icon: '⏱',
        bg: '#E2E0D8',
        textColor: '#000',
        valueSize: 'clamp(52px,7vw,108px)',
    },
    {
        label: '10,000+ Active Agents',
        desc: 'Think of the Call Bridge community as your growth engine. Join thousands of agents who trust us to deliver high-intent leads daily.',
        value: '10K+',
        icon: '📋',
        bg: '#2a2a2a',
        textColor: '#fff',
        valueSize: 'clamp(48px,6.5vw,100px)',
    },
    {
        label: '100% US-Based Call Centers',
        desc: 'All our calls are handled by trained US-based professionals ensuring high qualification standards and excellent communication.',
        value: '100%',
        icon: '📍',
        bg: '#C8C5B0',
        textColor: '#000',
    },
];

export default function StatsCards() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className={styles.card}
                        style={{ background: s.bg, color: s.textColor }}
                    >
                        <div className={styles.top}>
                            <span className={styles.cardLabel}>{s.label}</span>
                            <span className={styles.cardIcon}>{s.icon}</span>
                        </div>
                        <p className={styles.cardDesc}>{s.desc}</p>
                        <div
                            className={styles.cardValue}
                            style={{
                                color: s.textColor,
                                fontSize: s.valueSize ?? 'clamp(72px, 10vw, 140px)',
                            }}
                        >
                            {s.value}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

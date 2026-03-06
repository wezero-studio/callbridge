'use client';
import styles from './Marquee.module.css';

const logos = [
    { name: 'GEICO', url: 'https://cdn.worldvectorlogo.com/logos/geico.svg' },
    { name: 'Liberty Mutual', url: 'https://cdn.worldvectorlogo.com/logos/liberty-mutual.svg' },
    { name: 'Zendesk', url: 'https://cdn.worldvectorlogo.com/logos/zendesk-1.svg' },
    { name: 'HubSpot', url: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
    { name: 'Zapier', url: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg' },
    { name: 'Mailchimp', url: 'https://cdn.worldvectorlogo.com/logos/mailchimp.svg' },
];

export default function Marquee() {
    const doubled = [...logos, ...logos, ...logos]; // triple to assure long enough scroll
    return (
        <div className={styles.marqueeSection}>
            <div className={styles.marqueeTrack}>
                {doubled.map((item, i) => (
                    <div className={`${styles.marqueeItem} ${i % 2 === 0 ? styles.shape1 : styles.shape2}`} key={i}>
                        <div
                            className={styles.logoMask}
                            style={{
                                maskImage: `url(${item.url})`,
                                WebkitMaskImage: `url(${item.url})`,
                            }}
                            title={item.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

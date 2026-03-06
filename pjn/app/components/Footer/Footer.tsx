import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                {/* Left: Logo + tagline + nav links */}
                <div className={styles.brand}>
                    <div className={styles.logoRow}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="5" fill="#111" />
                            <rect x="5" y="5" width="7" height="18" fill="#FDDD23" />
                            <rect x="15" y="5" width="7" height="8" fill="#FDDD23" />
                        </svg>
                        <span className={styles.brandName}>Call Bridge</span>
                    </div>
                    <p className={styles.brandTagline}>
                        Real-time live transfer insurance leads. Pre-qualified prospects delivered directly to your agents — no cold calls, no wasted time.
                    </p>
                </div>

                {/* Center columns */}
                <div className={styles.left}>
                    <div className={styles.col}>
                        <div className={styles.colTitle}>Navigation</div>
                        <ul>
                            <li><Link href="#home">Home</Link></li>
                            <li><Link href="#how-it-works">How It Works</Link></li>
                            <li><Link href="#lead-types">Lead Types</Link></li>
                            <li><Link href="#why-us">Why Us</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.colTitle}>Lead Types</div>
                        <ul>
                            <li><Link href="#lead-types">Medicare Leads</Link></li>
                            <li><Link href="#lead-types">ACA Leads</Link></li>
                            <li><Link href="#lead-types">Final Expense Leads</Link></li>
                            <li><Link href="#lead-types">Auto Insurance Leads</Link></li>
                            <li><Link href="#lead-types">Health Insurance Leads</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.colTitle}>Company</div>
                        <ul>
                            <li><Link href="#contact">Book a Demo</Link></li>
                            <li><Link href="#contact">Partner With Us</Link></li>
                            <li><Link href="#contact">Support</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Right: Contact card */}
                <div className={styles.right}>
                    <div className={styles.contactCard}>
                        <div className={styles.contactTitle}>Get in Touch</div>
                        <Link href="#contact" className={styles.btnCTA}>Book a Demo</Link>
                        <p className={styles.emailLabel}>Or email us at</p>
                        <Link href="mailto:hello@callbridge.io" className={styles.email}>
                            hello@callbridge.io
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className={styles.bottom}>
                <span className={styles.copy}>© Call Bridge 2026. All Rights Reserved.</span>
                <div className={styles.social}>
                    <Link href="#" title="LinkedIn">in</Link>
                    <Link href="#" title="X">𝕏</Link>
                    <Link href="#" title="Facebook">f</Link>
                    <Link href="#" title="Instagram">ig</Link>
                </div>
                <div className={styles.bottomLinks}>
                    <Link href="#">Terms and Conditions</Link>
                    <Link href="#">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}

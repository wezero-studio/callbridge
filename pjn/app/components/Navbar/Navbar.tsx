'use client';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY < 80) {
                setVisible(true); // Always show at top
            } else if (currentY > lastY) {
                setVisible(false); // Scrolling down → hide
            } else {
                setVisible(true); // Scrolling up → show
            }
            setLastY(currentY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastY]);

    return (
        <div
            style={{
                padding: '16px',
                background: '#000',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                transform: visible ? 'translateY(0)' : 'translateY(-110%)',
                transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            <nav className={styles.nav}>
                <Link href="#home" className={styles.navLogo}>
                    <div className={styles.logoIcon}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="5" fill="#000" />
                            <rect x="5" y="5" width="7" height="18" fill="#FDDD23" />
                            <rect x="15" y="5" width="7" height="8" fill="#FDDD23" />
                        </svg>
                    </div>
                    <div className={styles.logoText}>
                        <span className={styles.brandName}>Call Bridge</span>
                    </div>
                </Link>

                <ul className={styles.navLinks}>
                    <li className={styles.navItem}><Link href="#home">Home</Link></li>
                    <li className={styles.navItem}><Link href="#how-it-works">How It Works</Link></li>
                    <li className={styles.navItem}><Link href="#lead-types">Lead Types</Link></li>
                    <li className={styles.navItem}><Link href="#why-us">Why Us</Link></li>
                    <li className={styles.navItem}><Link href="#contact">Contact</Link></li>
                </ul>

                <div className={styles.navActions}>
                    <Link href="#contact" className={styles.btnLogin}>Log In</Link>
                    <Link href="#contact" className={styles.btnApply}>Book a Demo</Link>
                </div>
            </nav>
        </div>
    );
}

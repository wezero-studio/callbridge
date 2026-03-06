'use client';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.inner}>
                {/* LEFT: Text content */}
                <div className={styles.left}>
                    <span className={styles.tag}>Get In Touch</span>
                    <h2 className={styles.title}>LET'S CONNECT</h2>
                    <p className={styles.desc}>
                        Whether you're an established insurance agency or just getting started, we'll help you find the right lead program. Reach out and our team will get back to you within one business day.
                    </p>

                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </span>
                            <div>
                                <p className={styles.infoLabel}>Phone</p>
                                <p className={styles.infoValue}>+1 (800) 555-0192</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </span>
                            <div>
                                <p className={styles.infoLabel}>Email</p>
                                <p className={styles.infoValue}>hello@callbridge.io</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </span>
                            <div>
                                <p className={styles.infoLabel}>Hours</p>
                                <p className={styles.infoValue}>Mon – Fri, 9am – 6pm EST</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Contact form */}
                <div className={styles.right}>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label className={styles.label}>First Name</label>
                                <input className={styles.input} type="text" placeholder="John" />
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Last Name</label>
                                <input className={styles.input} type="text" placeholder="Smith" />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Agency Name</label>
                            <input className={styles.input} type="text" placeholder="Apex Medicare Group" />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Email Address</label>
                            <input className={styles.input} type="email" placeholder="john@agencyname.com" />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>Message</label>
                            <textarea className={styles.textarea} rows={4} placeholder="Tell us about your agency and what you're looking for…" />
                        </div>
                        <button type="submit" className={styles.submitBtn}>Book a Demo →</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

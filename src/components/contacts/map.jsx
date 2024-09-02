import styles from './contacts.module.css';

export const Map = () => {

	return (
        <section className={styles.map}>
            <div className={`globalWrapper ${styles.contactsWrapper}`}>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>Контакты</h2>
                    <p className={styles.text}>А также немного о нас</p>
                </div>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>Мы в екатеринбурге, рядом с вами</h2>
                    <p className={styles.text}>Залогом явной и лучшей коммуникации является доступность</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2187.0691804934913!2d60.69718557725121!3d56.758949314049005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16999104adfe5%3A0x7ffd10a3298bed8!2z0YPQuy4g0J_RgNC-0YTRgdC-0Y7Qt9C90LDRjywgODMsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQuy4sIDYyMDAxMA!5e0!3m2!1sru!2sru!4v1719818539378!5m2!1sru!2sru"
                    width="1600"
                    height="394"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
	);
}
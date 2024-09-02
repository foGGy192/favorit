import styles from "./contacts.module.css";
import requisitesDocument from "/Карта Партнёра ФАВОРИТ ЭНЕРГО СБЕР банк.pdf"; 

export const ContactsInfo = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = requisitesDocument; 
    link.download = 'requisites.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.contactsInfo}>
      <div className={`globalWrapper ${styles.contactsWrapper}`}>
        <div className={styles.textBlockInfo}>
          <h2 className={styles.title}>
            Напишите нам, или оставьте заявку на звонок
          </h2>
          <p className={styles.text}>
            Ответим на все ваши вопросы и проконсультируем с выбором
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>+79028769422</h2>
            <h2 className={styles.cardTitle}>+73432010153</h2>
            <p className={styles.cardText}>Наш телефон</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
            t_favorit@mail.ru
            </h2>
            <p className={styles.cardText}>Наша почта</p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>6679107428</h2>
            <p className={styles.cardText}>ИНН</p>
          </div>
          <div className={styles.card}>
            <a href="#" className={styles.requisites} onClick={handleDownload}>
              Реквизиты компании
              <img src="/GrayArrow.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
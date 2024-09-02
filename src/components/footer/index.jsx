import styles from './footer.module.css';
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
        <div className={`globalWrapper ${styles.globalWrapper}`}>
            <Link to={"/"}>
                <p className={styles.logo}>Favorit <span>Energo</span></p>
            </Link>
            <div className={styles.footerLists}>
                <div className={styles.footerList}>
                    <p className={`text ${styles.text}`}>Аренда</p>
                    <ul className={styles.footerLinks}>
                        <Link to={"/catalog/компрессоры"}>
                        <li className={`text ${styles.footerItem}`}>Аренда компрессоров</li>
                        </Link>
                        <Link to={"/catalog/генераторы"}>
                        <li className={`text ${styles.footerItem}`}>Аренда генераторов</li>
                        </Link>
                        
                    </ul>
                </div>
                <div className={styles.footerList}>
                    <p className={`text ${styles.text}`}>Компания</p>
                    <ul className={styles.footerLinks}>
                        <Link to={"/review"}>
                        <li className={`text ${styles.footerItem}`}>Отзывы</li>
                        </Link>
                        <Link to={"/contacts"}>
                        <li className={`text ${styles.footerItem}`}>Контакты</li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.footerList}>
                    <p className={`text ${styles.text}`}>Прочее</p>
                    <ul className={styles.footerLinks}>
                        <Link to={"/about"}>
                        <li className={`text ${styles.footerItem}`}>FAQ</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

  );
}
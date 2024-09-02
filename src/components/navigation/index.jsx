import styles from './navigation.module.css';
import {Link, useNavigate,} from "react-router-dom";

export const Navigation = () => {

	const navigation = useNavigate()

	

	return (
			<nav className={styles.nav}>
				<div className={`globalWrapper ${styles.wrapper}`}>
					<Link to={"/"}>
						<p className={styles.logo}>Favorit <span className={styles.logoSpan}>Energo</span></p>
					</Link>
					<ul className={styles.list}>
						<Link className='text' to={"/Review"}>Отзывы</Link>
						<Link className='text' to={"/catalog"}>Каталог</Link>
						<Link className='text' to={"/About"}>FAQ</Link>
						<Link className='text' to={"/contacts"}>Контакты</Link>
					</ul>
				</div>
			</nav>
	);
}
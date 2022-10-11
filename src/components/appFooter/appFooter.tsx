import LanguageIcon from '@mui/icons-material/Language';
import vkIcon from 'src/assets/VK.svg';
import whatsAppIcon from 'src/assets/Whatsapp.svg';
import telegramIcon from 'src/assets/Telegram.svg';
import { Link } from 'react-router-dom';
import styles from './appFooter.module.scss';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <h3>QPICK</h3>
      <div className={styles.footer_pages}>
        <p>Избранное</p>
        <Link to="/basket">
          <p>Корзина</p>
        </Link>
        <p>Контакты</p>
      </div>
      <div className={styles.footer_terms}>
        <p className={styles.footer_terms_header}>Условия сервиса</p>
        <div className={styles.footer_lang}>
          <LanguageIcon />
          <p className={styles.footer_lang_item}>Каз</p>
          <p className={styles.footer_lang_active}>Рус</p>
          <p className={styles.footer_lang_item}>Eng</p>
        </div>
      </div>
      <div className={styles.footer_icons}>
        <img src={vkIcon} alt="icon" />
        <img src={whatsAppIcon} alt="icon" />
        <img src={telegramIcon} alt="icon" />
      </div>
    </footer>
  );
};
export default AppFooter;

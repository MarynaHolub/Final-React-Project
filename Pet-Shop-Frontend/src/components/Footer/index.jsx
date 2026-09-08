import whatsapp from '../../assets/icons/iconWhatsapp.svg';
import instagram from '../../assets/icons/iconInstagram.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={`${styles.footerSection} ${styles.container}`}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.footerWrapper}>
        <div className={styles.item}>
          <p className={styles.itemName}>Phone</p>
          <p className={styles.itemValue}>+49 30 915-88492</p>
        </div>
        <div className={styles.item}>
          <p className={styles.itemName}>Socials</p>
          <div className={styles.icons}>
            <a target="_blank" href="https://www.instagram.com/itcareerhub/">
              <img src={instagram} alt="Instagram" />
            </a>
            <a target="_blank" href="https://www.instagram.com/itcareerhub/">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
          </div>
        </div>
        <div className={styles.item}>
          <p className={styles.itemName}>Address</p>
          <p className={styles.itemValue}>
            Wallstraẞe 9-13, 10179 Berlin, Deutschland
          </p>
        </div>

        <div className={styles.item}>
          <p className={styles.itemName}>Working Hours</p>
          <p className={styles.itemValue}>24 hours a day</p>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8169.021710176714!2d13.349558859139451!3d52.50330910100599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb0e85329a1%3A0xa141f1e83418ee88!2sIT%20Career%20Hub!5e0!3m2!1suk!2sde!4v1788857962520!5m2!1suk!2sde"
          width="1360"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
}
export default Footer;

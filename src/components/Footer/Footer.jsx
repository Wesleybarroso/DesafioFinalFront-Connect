import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>

        <div className={styles.logoSection}>
          <img src="/logo.png" alt="Logo Connect" />
          <span>Connect</span>
        </div>

        <div className={styles.text}>
          <p>© 2026 Vai na Web & Empower. Todos os direitos reservados.</p>
          <p>Projeto destinado exclusivamente a fins educativos.</p>
        </div>

        <div className={styles.socialIcons}>
          <img src="/instagram.png" alt="Instagram" />
          <img src="/whatsapp.png" alt="WhatsApp" />
          <img src="/linkedin.png" alt="LinkedIn" />
        </div>

      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/product" className={styles.navLink}>Products</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/favorites" className={styles.navLink}>Favorites</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
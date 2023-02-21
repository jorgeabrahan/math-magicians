import { Link, Outlet } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function Navbar() {
  return (
    <div className="place-center">
      <nav className={styles.navBar}>
        <h1 className={styles.navBarTitle}>Math Magicians</h1>
        <ul className={styles.navBarList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

import styles from './sectionTitle.module.css';
import { NavLink } from 'react-router-dom';

function SectionTitle({name, link}){

    return(
        <div className={styles.blockTitle}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.divider}></div>
            <NavLink to="/sale" className={styles.allLink}>
              <h5>{link}</h5>
            </NavLink>
          </div>
    )
}
export default SectionTitle
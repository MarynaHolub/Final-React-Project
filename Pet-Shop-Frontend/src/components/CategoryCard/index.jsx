import { API_URL } from "../../constants/api";
import styles from './CategoryCard.module.css';

function CategoryCard({category}){


    return(
        <div>
            <img src={`${API_URL}${category.image}`} alt="Category-image" className={styles.img} />
            <p className={styles.title}>{category.title}</p>
        </div>
    )
}
export default CategoryCard
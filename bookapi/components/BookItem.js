import styles from "../styles/Books.module.css"
const BookItem = ({ name, description, id, imgUrl }) => {
  return (
    <li className={styles.listItem}>
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  );
};

export default BookItem;

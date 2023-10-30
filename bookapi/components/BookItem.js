const BookItem = ({ name, description, id, imgUrl }) => {
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  );
};
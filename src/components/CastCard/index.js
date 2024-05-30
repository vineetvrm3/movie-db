import "./index.css";

const CastCard = ({ item }) => {
  const { original_name, character, profile_path } = item;
  const imageBaseDomain = "https://image.tmdb.org/t/p/w500";
  return (
    <li className="cast-card-item-container">
      <img
        src={imageBaseDomain + profile_path}
        alt={original_name}
        className="cast-profile-image"
      />
      <p>{original_name}</p>
      <p>{`Character: ${character}`}</p>
    </li>
  );
};

export default CastCard;

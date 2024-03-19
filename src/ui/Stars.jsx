import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function roundToHalf(num) {
  return Math.round(num * 2) / 2;
}

function Stars({ reviews, ratings }) {
  const rating = roundToHalf(ratings);
  const fullStars = Array.from({ length: Math.floor(rating) }, (_, i) => i);

  return (
    <div className="flex items-center">
      {fullStars.map((i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className="text-sm text-orange-500"
        />
      ))}
      {fullStars.length - rating !== 0 && (
        <FontAwesomeIcon
          icon={faStarHalfStroke}
          className="text-sm text-orange-500"
        />
      )}
      <p className="ms-3 text-stone-500">({reviews} Reviews)</p>
    </div>
  );
}

export default Stars;

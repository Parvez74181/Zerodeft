import { Star, StarHalf } from "lucide-react";

const Ratings = ({ rating_data }: { rating_data: number }) => {
  const rating = rating_data ?? 0; // Fallback to 0 if `rating_data` is null or undefined
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 >= 0.5; // Whether to show a half star
  const totalStars = 5; // Maximum number of stars
  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="text-lg font-medium"> {rating_data}</span>
        <div className="flex items-center">
          {/* Render full stars */}
          {Array.from({ length: fullStars }).map((_, index) => (
            <Star key={index} strokeWidth={0} fill="#FF9900" />
          ))}

          {/* Render half star if needed */}
          {hasHalfStar && <StarHalf strokeWidth={0} fill="#FF9900" />}

          {/* Render empty stars if any */}
          {Array.from({ length: totalStars - fullStars - (hasHalfStar ? 1 : 0) }).map((_, index) => (
            <Star key={index} strokeWidth={1} className=" text-gray-500" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Ratings;

import { Link } from "react-router-dom";

function ShowCard() {
  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src="https://static.tvmaze.com/uploads/images/medium_portrait/423/1058422.jpg"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">The Witcher</h2>
          <p>
            Based on the best-selling fantasy series, The Witcher is an epic
            tale of fate and family. Geralt of Rivia, a solitary monster hunter,
            struggles to find his place in a world where people often prove more
            wicked than beasts. But when destiny hurtles him toward a powerful
            sorceress, and a young princess with a dangerous secret, the three
            must learn to navigate the increasingly volatile Continent together.
          </p>
        </div>
        <Link
          to="/show/1"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;

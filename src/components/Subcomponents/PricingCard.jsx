// const title = "Silver Streak";
// const desc = "A streak Solution for beginners";
// const price = "₹499.99/mo";
import PropTypes from "prop-types";
const PricingCard = ({ planName, price, description, bgcolor }) => {
  return (
    <div
      className="flex flex-col rounded-3xl"
      style={{ backgroundColor: bgcolor }}
    >
      <div className="px-6 py-8 max-md:px-3 max-md:py-4">
        <div className="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 className="font-medium tracking-tighter text-black text-3xl max-md:text-2xl">
              {planName}
            </h2>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
          <div className="mt-6">
            <p>
              <span className="text-5xl font-light tracking-tight text-black max-md:text-lg">
                {price}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-6 pb-8 ">
        <a
          aria-describedby="tier-starter"
          className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-xl inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white max-md:p-2"
          href="#"
        >
          Choose Plan
        </a>
      </div>
    </div>
  );
};
PricingCard.propTypes = {
  planName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgcolor: PropTypes.string.isRequired,
};
PricingCard.defaultProps = {
  bgColor: "#000000", // Default to black if no color is provided
};
export default PricingCard;

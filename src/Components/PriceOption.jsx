import PropTypes from "prop-types";
import Feature from "./Feature";
const PriceOption = ({option}) => {
    const {price, name, features} = option;
    return (
        <div className="text-center bg-blue-500 flex flex-col p-5 rounded-lg m-3 text-white">
            <h2 className="text-7xl font-bold">{price}</h2>
            <span className="text-2xl font-semibold">/Month</span>
            <h2 className="text-3xl font-bold ">{name}</h2>
        <div className="flex-grow">
        {
            features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
        }
        </div>
        <div>
            <button className="bg-green-400 py-2 px-5 w-full rounded-full font-bold hover:bg-green-800 ">Buy Now</button>
        </div>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;
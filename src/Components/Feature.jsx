import { IoCheckmarkCircle } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div className="text-left">
            <p className="flex items-center gap-1"><span><IoCheckmarkCircle></IoCheckmarkCircle></span> <span>{feature}</span></p>
        </div>
    );
};

export default Feature;
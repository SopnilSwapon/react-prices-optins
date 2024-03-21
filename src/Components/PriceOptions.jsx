import PriceOption from "./PriceOption";

const PriceOptions = () => {
 const options =   [
    {
        "id": 1,
        "name": "Smartphone X",
        "price": 799.99,
        "features": ["5G Connectivity", "High-resolution Display", "Dual-camera System", "Face ID Authentication"]
    },
    {
        "id": 2,
        "name": "Laptop Pro",
        "price": 1299.99,
        "features": ["Intel Core i7 Processor", "16GB RAM", "512GB SSD Storage", "13-inch Retina Display"]
    },
    {
        "id": 3,
        "name": "Smart Watch Elite",
        "price": 299.99,
        "features": ["Fitness Tracking", "Heart Rate Monitoring", "Waterproof Design", "Bluetooth Connectivity"]
    },
    {
        "id": 4,
        "name": "Wireless Earbuds Pro",
        "price": 149.99,
        "features": ["Active Noise Cancellation", "Water-resistant Design", "Long Battery Life", "Touch Controls"]
    },
    {
        "id": 5,
        "name": "Smart Home Security Camera",
        "price": 99.99,
        "features": ["1080p HD Video", "Motion Detection", "Two-Way Audio", "Cloud Storage"]
    },
    {
        "id": 6,
        "name": "Gaming Console X",
        "price": 399.99,
        "features": ["4K Gaming Support", "HDR Graphics", "DualShock Controller", "Online Multiplayer"]
    }
]

    
    return (
        <div>
            <h2 className="text-5xl my-5 text-center font-bold">
                Best Prices in The Town
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
            {
                options.map(option => <PriceOption key={option.id} option ={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;
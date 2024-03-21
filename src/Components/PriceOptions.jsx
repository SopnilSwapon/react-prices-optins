
const PriceOptions = () => {
    [
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
        }
    ]
    
    return (
        <div>
            <h2 className="text-3xl text-center font-bold">
                Best Prices in The Town
            </h2>
        </div>
    );
};

export default PriceOptions;
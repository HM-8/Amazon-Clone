import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id={1}
						title="Dell Inspiron 27 AIO, 27 inch, FHD Touchscreen, Intel Core i7-10510U, NVIDIA MX110 2GB, 1TB HDD + 512GB SSD Storage, 16GB RAM, i7790-7388SLV-PUS, 15-15.99 inches"
						price={1,333.98}
						image="https://images-na.ssl-images-amazon.com/images/I/717mmm0oqnL._AC_SL1500_.jpg"
						rating={4}
					/>

					<Product
						id={2}
						title={
							"Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
						}
						price={949.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg"
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product
						id={3}
						title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
						price={329.99}
						image="https://images-na.ssl-images-amazon.com/images/I/41h0H4SCgPL._AC_US160_.jpg"
						rating={5}
					/>

					<Product
						id={4}
						title="Wyze Cam Pan 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, White - WYZECP1"
						price={50.96}
						image="https://images-na.ssl-images-amazon.com/images/I/31Y8NH8Ia5L._AC_.jpg"
						rating={4}
					/>

					<Product
						id={5}
						title={
							"Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours Of Listening Time - Black (Latest Model)"
						}
						price={179.00}
						image="https://m.media-amazon.com/images/I/51QxA-98Q+L._AC_UL320_.jpg"
						rating={4}
					/>
				</div>

				<div className="home__row">
					
					<Product
						id={6}
						title={
							"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR"
						}
						price={999.99}
						image="https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_UY218_.jpg"
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;

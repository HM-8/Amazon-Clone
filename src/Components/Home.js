import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id={1}
						title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
						price={109.99}
						image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US240_FMwebp_QL65_.jpg"
						rating={4}
					/>

					<Product
						id={2}
						title={
							"Lenovo Flex 5 14" +
							"2-in-1 Laptop, 14.0" +
							"FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
						}
						price={595.69}
						image="https://images-na.ssl-images-amazon.com/images/I/41Sj6WWOXtL._AC_US240_FMwebp_QL65_.jpg"
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id={3}
						title="AUKEY FHD Webcam, 1080p Live Streaming Camera with Stereo Microphone, Desktop or Laptop USB Webcam for Widescreen Video Calling and Recording"
						price={49.99}
						image="https://images-na.ssl-images-amazon.com/images/I/310SV0HFMPL._AC_US240_FMwebp_QL65_.jpg"
						rating={4}
					/>

					<Product
						id={4}
						title="WD 2TB WD Elements Portable External Hard Drive, USB 3.0 - WDBU6Y0020BBK-WESN"
						price={49.72}
						image="https://images-na.ssl-images-amazon.com/images/I/31pLxnRHbsL._AC_US240_FMwebp_QL65_.jpg"
						rating={4}
					/>

					<Product
						id={5}
						title={
							"Sceptre E248W-19203R 24" +
							"Ultra Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Metallic Black 2018"
						}
						price={104.68}
						image="https://images-na.ssl-images-amazon.com/images/I/51d3J1EYbVL._AC_US240_FMwebp_QL65_.jpg"
						rating={5}
					/>
				</div>

				<div className="home__row">
					
					<Product
						id={6}
						title={
							"Sony X800H 65 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
						}
						price={903.09}
						image="https://m.media-amazon.com/images/I/71+F+eS7qfL._QL65_AC_UL640_.jpg"
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;

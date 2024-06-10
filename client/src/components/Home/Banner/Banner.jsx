import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import BannerImg1 from "../../../assets/banner1.webp";
import BannerImg2 from "../../../assets/banner2.webp";
import BannerImg3 from "../../../assets/banner3.webp";
import BannerImg4 from "../../../assets/banner4.webp";
import ImageSlider from "./slider";

const Banner = () => {
    const images = [
        BannerImg1,
        BannerImg2,
        BannerImg3,
        BannerImg4
    ];
    return (
    // <div className="hero-banner">
    //     <div className="content">
    //         <div className="text-content">
    //             <h1>SALES</h1> 
    //             <p>
    //                 Shop the best electronics items only at MyStore.com. Hope you will love the products.
    //             </p>
    //             <div className="ctas">
    //                 <div className="banner-cta">Read More</div>
    //                 <div className="banner-cta v2">Shop Now</div>


    //             </div>
    //         </div>
    //         <img className="banner-img" src={BannerImg} alt=""/>
    //     </div>
    // </div>
    <div className="App">
        <div style={{padding: "10px"}}>
          <ImageSlider images={images} />
        </div>
    </div>
    );
};  

export default Banner;

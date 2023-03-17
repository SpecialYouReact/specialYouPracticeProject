import React from "react";
import styles from "./homepage.module.css";
//components
import MuiInput from "../../../shared components /material ui/Input";
import ProductCard from "../../../shared components /ProductCard";
import User from "../../../shared components /User";
import Banners from "../../../shared components /material ui/Carousel";
import TestimonialBox from "../../../shared components /TestimonialBox";
// svg Icons
import HeartIcon from "../../../shared assets/icons/HeartIcon.svg";
import CartIcon from "../../../shared assets/icons/CartIcon.svg";
import UserIcon from "../../../shared assets/icons/UserIcon.svg";
import RectangleIcon from "../../../shared assets/icons/RectangleIcon.svg";
import CircleIcon from "../../../shared assets/icons/CircleIcon.svg";
import LeftArrowCircleIcon from "../../../shared assets/icons/LeftArrowCircleIcon.svg";
import RightArrowCircleIcon from "../../../shared assets/icons/RightArrowCircleIcon.svg";
import DoubleQuotesIcon from "../../../shared assets/icons/DoubleQuotesIcon.svg";
import DownArrowCircleIcon from "../../../shared assets/icons/DownArrowCircleIcon.svg";
import InstagramIcon from "../../../shared assets/icons/InstagramIcon.svg";
import LinkedInIcon from "../../../shared assets/icons/LinkedInIcon.svg";
import YouTubeIcon from "../../../shared assets/icons/YouTubeIcon.svg";
import SpecialYou from "../../../shared assets/images/brandLogo8k.png";
// images
import CircleImage1 from "../../../shared assets/images/circleImage1.jpg";
import CircleImage2 from "../../../shared assets/images/circleImage2.jpg";
import CircleImage3 from "../../../shared assets/images/circleImage3.jpg";
import CircleImage4 from "../../../shared assets/images/circleImage4.jpg";
import FacePhoto1 from "../../../shared assets/images/happyCustomer.avif";
import FacePhoto2 from "../../../shared assets/images/happyCustomer2.avif";
import FacePhoto3 from "../../../shared assets/images/happyCustomer3.avif";

const HomePage = () => {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.container}>
        {/* header section (first section) */}
        <header className={styles.header}>
          {/* header first navbar section (first section-first part) */}
          <nav className={styles.firstNavBar}>
            <img src={SpecialYou} className={styles["special-you-logo"]} />
            <MuiInput
              label={"Search Any Items"}
              style={{
                width: "200px",
                borderRadius: "40px",
              }}
              type={"text"}
              // className={styles["special-you-search-box"]}
            />
            <div className={styles["navBar-shape-container"]}>
              <img src={HeartIcon} className={styles.headerIcon} />
              <img src={CartIcon} className={styles.headerIcon} />
              <img src={UserIcon} className={styles.headerIcon} />
            </div>
          </nav>
          {/* header second navbar section (first section-second part)   */}
          <nav className={styles.secondNavBar}>
            <p>Birthday Themes</p>
            <p>Wedding Themes</p>
            <p>Occasion Themes</p>
            <p>Personalised Balloons</p>
          </nav>
        </header>

        {/* banner section (second section) */}
        {/* <div className={styles.bannerParent}> */}
        {/* <div className={styles.banner}></div> */}
        <Banners />

        {/* <div className={styles.shapes}>
          <img src={RectangleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
        </div>
      </div> */}

        {/* our Products (third section)*/}
        <div className={styles["ourProducts-container"]}>
          <h1>Our Products</h1>
          <div className={styles["ourProducts-image-text-contain"]}>
            <div className={styles["ourProducts-image-text-container"]}>
              <div
                className={`${styles["ourProduct-image1"]} ${styles["ourProduct-image"]}`}
              ></div>
              <p className={styles["ourProducts-text1"]}>
                Decoration backdrops
              </p>
            </div>
            <div className={styles["ourProducts-image-text-container"]}>
              <div
                className={`${styles["ourProduct-image2"]} ${styles["ourProduct-image"]}`}
              ></div>
              <p className={styles["ourProducts-text2"]}>Balloon backgrounds</p>
            </div>
            <div
              className={`${styles["ourProducts-image-text-container"]} ${styles["ourProducts-image-text-container3"]}`}
            >
              <div
                className={`${styles["ourProduct-image3"]} ${styles["ourProduct-image"]}`}
              ></div>
              <p className={styles["ourProducts-text3"]}>Flowers and leaves</p>
            </div>
          </div>
        </div>

        {/* Decorations For(fourth section)  */}
        <div className={styles["decorationsFor-container"]}>
          <h1>Decorations For</h1>
          <div className={styles["decorationsFor-container-images"]}>
            <div className={styles["decorationsFor-container-image1"]}></div>
            <div className={styles["decorationsFor-container-image2"]}></div>
            <div className={styles["decorationsFor-container-image3"]}></div>
            <div className={styles["decorationsFor-container-image4"]}></div>
            <div className={styles["decorationsFor-container-image5"]}></div>
            <div className={styles["decorationsFor-container-image6"]}></div>
            <button className={styles.button1}>View All</button>
          </div>
          <button className={styles.button2}>View All Themes</button>
        </div>

        {/* fifth section(best sellers) */}
        <div className={styles["bestSellers-container"]}>
          {/* fifth section--first part(heading)  */}
          <h1>Best Sellers</h1>
          {/* fifth section--second part(images,text and slider button)  */}
          <div className={styles["bestSellers-image-text-icon-container"]}>
            <img src={LeftArrowCircleIcon} className={styles.leftArrow} />
            <ProductCard
              image={CircleImage1}
              text={"Happy Birthday Decoration"}
              rate={"₹399"}
              mrp={"₹500"}
              discount={"20% off"}
            />
            <ProductCard
              image={CircleImage2}
              text={"Happy Anniversary"}
              rate={"₹480"}
              mrp={"₹600"}
              discount={"20% off"}
            />
            <ProductCard
              image={CircleImage3}
              text={"Bachelorette party"}
              rate={"₹820"}
              mrp={"900"}
              discount={"10% off"}
            />
            <ProductCard
              image={CircleImage4}
              text={"First Birthday"}
              rate={"₹425"}
              mrp={"₹500"}
              discount={"15% off"}
            />
            <img src={RightArrowCircleIcon} className={styles.rightArrow} />
          </div>

          {/* fifth section--third part(below shapes)  */}
          <div className={styles.shapes}>
            <img src={RectangleIcon} />
            <img src={CircleIcon} />
            <img src={CircleIcon} />
            <img src={CircleIcon} />
            <img src={CircleIcon} />
          </div>
        </div>

        {/* sixth section(themes part) */}
        <div className={styles["themes-container"]}>
          <h1>Decorations For Kids</h1>
          <div className={styles["themes-images"]}>
            <img src={LeftArrowCircleIcon} />

            <div
              className={`${styles["themes-image1-container"]} ${styles["themes-image-container"]}`}
            >
              <div
                className={`${styles["themes-image1"]} ${styles["themes-image"]}`}
              ></div>
            </div>

            <div
              className={`${styles["themes-image2-container"]} ${styles["themes-image-container"]}`}
            >
              <div
                className={`${styles["themes-image2"]} ${styles["themes-image"]}`}
              ></div>
            </div>

            <div
              className={`${styles["themes-image3-container"]} ${styles["themes-image-container"]}`}
            >
              <div
                className={`${styles["themes-image3"]} ${styles["themes-image"]}`}
              ></div>
            </div>

            <div
              className={`${styles["themes-image4-container"]} ${styles["themes-image-container"]}`}
            >
              <div
                className={`${styles["themes-image4"]} ${styles["themes-image"]}`}
              ></div>
            </div>

            <div
              className={`${styles["themes-image5-container"]} ${styles["themes-image-container"]}`}
            >
              <div
                className={`${styles["themes-image5"]} ${styles["themes-image"]}`}
              ></div>
            </div>

            <div
              className={`${styles["themes-image6-container"]} ${styles["themes-image-container"]}`}
            >
              <div
                className={`${styles["themes-image6"]} ${styles["themes-image"]}`}
              ></div>
            </div>

            <img src={RightArrowCircleIcon} />
          </div>
        </div>

        {/* seventh container(themes grid) */}
        <div className={styles["themesGrid-container"]}>
          <div className={styles["themesGrid-container-images"]}>
            <div
              className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image1"]}`}
            ></div>
            <div
              className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image2"]}`}
            ></div>
            <div
              className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image3"]}`}
            ></div>
            <div
              className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image4"]}`}
            ></div>
            <div
              className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image5"]}`}
            ></div>
            <div
              className={`${styles["themesGrid-container-image"]} ${styles["themesGrid-container-image6"]}`}
            ></div>
            <button className={styles.buttonThemesGrid}>View All</button>
          </div>
          <button className={styles.buttonThemesGrid2}>View All Themes</button>
        </div>

        {/* eighth section(second bannner) */}
        {/* <div className={styles["secondBanner-container"]}> */}
        {/* eighth section-- first part  */}
        {/* <h1>For Christmas Eve</h1> */}
        {/* eighth section-- second part  */}
        {/* <div className={styles["secondBanner-image-container"]}>
          <img src={LeftArrowCircleIcon} />
          <div className={styles.photo2}></div>
          <img src={RightArrowCircleIcon} />
        </div> */}
        {/* eighth section-- third part  */}
        {/* <div className={styles.shapes}>
          <img src={RectangleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
        </div>
      </div> */}

        {/* ninth section(Decoration backdrops same as best sellers) */}
        {/* <div className={styles.decorationBackdrops}>
        <h1>Decoration Backdrops</h1>
        <div className={styles["bestSellers-image-text-icon-container"]}>
          <img src={LeftArrowCircleIcon} />

          <ProductCard
            image={CircleImage1}
            text={"Happy Birtday Decoration"}
            rate={"₹399"}
            mrp={"₹500"}
            discount={"20% off"}
          />
          <ProductCard
            image={CircleImage2}
            text={"Happy Anniversary"}
            rate={"₹480"}
            mrp={"₹600"}
            discount={"20% off"}
          />
          <ProductCard
            image={CircleImage3}
            text={"Bachelorette party"}
            rate={"₹820"}
            mrp={"900"}
            discount={"10% off"}
          />
          <ProductCard
            image={CircleImage4}
            text={"First Birthday"}
            rate={"₹425"}
            mrp={"₹500"}
            discount={"15% off"}
          />
          <img src={RightArrowCircleIcon} />
        </div>
 */}
        {/* fifth section--third part(below shapes)  */}
        {/* <div className={styles.shapes}>
          <img src={RectangleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
        </div>
      </div>
 */}
        {/* tenth section(testimonials) */}

        {/* <div className={styles.testimonials}> */}
        {/* testimonials first part  */}
        {/* <h1>Happy Customers</h1> */}
        {/* testimonials second part  */}
        {/* <div className={styles["happyCustomers-container"]}>
          <img src={LeftArrowCircleIcon} />

          <div>
            <TestimonialBox
              text={"We bought a backdrop from Special You to surprise "}
            />
            <User image={FacePhoto1} text={"Leslie Alexander"} />
          </div>

          <div>
            <TestimonialBox
              text={"We bought a backdrop from Special You to surpri"}
            />
            <User image={FacePhoto2} text={"Guy Hawkins"} />
          </div>

          <div>
            <TestimonialBox text={"We bought a backdrop from "} />
            <User image={FacePhoto3} text={"Brooklyn Simmons"} />
          </div>

          <img src={RightArrowCircleIcon} />
        </div>
        {/* testimonials third part(below shapes)  */}
        {/* <div className={styles.shapes}>
          <img src={RectangleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
          <img src={CircleIcon} />
        </div>
      </div> */}

        {/* Eleventh section(Footer has three parts) */}
        {/* <footer> */}
        {/* Footer first part(select element for SEO )  */}
        {/* <div className={styles["availableCity-container"]}>
          <h1>Available Cities</h1>
          <img
            src={DownArrowCircleIcon}
            className={styles.downArrowCircleIcon}
          />
        </div> */}
        {/* Footer second part(Follow us on)  */}
        {/* <div className={styles["connect-container"]}>
          <div className={styles["connect-container-leftPart"]}>
            <img src={SpecialYou} width="152px" height="48px" />
            <div className={styles["footer-company-strapline"]}>
              We deliver happiness at door step
            </div>
          </div>
          <div className={styles["connect-container-rightPart"]}>
            <h2>Follow us on</h2>
            <div className={styles["footer-svgIcons-container"]}>
              <img src={InstagramIcon} />
              <img src={LinkedInIcon} />
              <img src={YouTubeIcon} />
            </div>
          </div> 
        </div> */}
        {/* Footer third part(Copyright part)  */}
        {/* <div className={styles["copyright-container"]}>
          <h4>Copyright 2022 © special you</h4>
        </div>
      </footer>
    // </> */}
      </div>
    </div>
  );
};
export default HomePage;

// import
//   SearchIcon,

//   CartIcon,
//   UserIcon,
//   RectangleIcon,
//   CircleIcon,
//   LeftArrowCircleIcon,
//   RightArrowCircleIcon,
//   HeartCircleIcon2,
//   DoubleQuotesIcon,
//   DownArrowCircleIcon,
//   InstagramIcon,
//   LinkedInIcon,
//   YouTubeIcon,
//  from "../../../shared assets/icons";

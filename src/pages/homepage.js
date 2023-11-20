import React from "react";
import map from "../components/images/map2.jpg";

import hhh from "../components/images/hhh.jpg";
import fish1 from "../components/images/fish2.jpg";
import md from "../components/images/md.jpg";
import rr from "../components/images/rr.png";
import "../components/styles/YourComponent.css";

import { SiYourtraveldottv } from "react-icons/si";

import two from "../components/images/i2.jpg";
import three from "../components/images/i3.jpg";
import four from "../components/images/i4.jpg";
import five from "../components/images/i5.jpg";
import seven from "../components/images/op.jpg";
import eight from "../components/images/i8.jpg";
import nine from "../components/images/i9.jpg";

import wa1 from "../components/images/wa1.jpg";
import wa2 from "../components/images/wa2.jpg";
import wa3 from "../components/images/wa3.jpg";
import wa4 from "../components/images/wa4.jpg";
import wa5 from "../components/images/wa5.jpg";
// import Carousel from "./components/compenentpages/carousel";

const Homepage = () => {
  return (
    <div className="">
      <section id="one-half" className="goblack">
        <span>
          <img src={map} alt="" />
        </span>

        <div className="half-content">
          <div className="half__text">
            <h1>About Us</h1>
            <p>
              Pickyourtrail is India's leading online travel company that
              delivers tailor-made international holidays. Pickyourtrail aims to
              change the customer experience so they can explore destinations at
              their own pace with completely customized tour packages.
            </p>
          </div>
          <div className="half__boxes">
            <div className="box">
              <span href="#">
                <i className="fas fa-paw logo ">
                  {" "}
                  <SiYourtraveldottv />{" "}
                </i>
              </span>
              <h2>Our Mission</h2>
              <p>
                our mission is to provide exceptional travel services that
                exceed the expectations of our clients and create unforgettable
                journey.
              </p>
            </div>
            <div className="box">
              <span href="#">
                <i className="fas fa-paw logo">
                  {" "}
                  <SiYourtraveldottv />{" "}
                </i>
              </span>
              <h2>Our Vision</h2>
              <p>
                our vision is to inspire, connect, and enrich lives through
                exceptional travel experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="two">
        {" "}
        <div className="heading ">
          <h1 style={{ fontFamily: "Raleway" }}>What We Do </h1>
          <p className="lightblack">
            we specialize in curating and delivering unparalleled travel
            experiences that cater to the unique desires and preferences of our
            clients.
          </p>
        </div>
        <div className="container">
          <div className="info">
            <span>
              <img src={hhh} alt="" />
            </span>
            <div className="info__text">
              <h1>Embark on Your Journey</h1>

              <p>
                Embark on Your Journey" is an invitation to step into a world of
                discovery, where each adventure becomes a transformative
                experience.
              </p>
              <h5 className="">READ MORE</h5>
            </div>
          </div>
          <div className="info">
            <span>
              <img src={fish1} alt="" />
            </span>
            <div className="info__text">
              <h1>Begin Your Epic Adventure</h1>

              <p>
                Let us be your guide to unlocking new horizons, experiencing
                diverse cultures, and creating memories that will last a
                lifetime.
              </p>

              <h5 className="">READ MORE</h5>
            </div>
          </div>
          <div className="info">
            <span>
              <img src={md} alt="" />
            </span>
            <div className="info__text">
              <h1>Roam Beyond Limits</h1>

              <p>
                Our mission is to be your guiding compass as you embark on a
                journey that transcends boundaries and ignites the spirit of
                adventure.
              </p>

              <h5 className="">READ MORE</h5>
            </div>
          </div>
        </div>
      </section>

      <section id="four" className="goblack">
        <article>
          <h1>Happy Customers</h1>
          <p>
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Non quae, fugiat.
          </p>

          <p>
            Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non quae, fugiat. Lorem ipsum viverra feugiat.
            Pellen tesque libero ut justo, ultrices in ligula.
          </p>

          <div className="article__icon">
            <div className="customer__info">
              <span>
                <i className="fas fa-user-plus"></i> 100K+
              </span>
              <pre> Customers</pre>
            </div>

            <div className="customer__info">
              <span>
                <i className="fas fa-thumbs-up"></i> 100%
              </span>
              <pre> Satisfaction</pre>
            </div>
          </div>
        </article>

        <div className="four__info">
          <div className="some__info">
            <span>
              <img
                src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/testi1.jpg"
                alt=""
              />
            </span>
            <div className="four__text">
              <h6 className="text-blue-600 text-5xl ">{"\u201C"} </h6>
              <p>
                Dsuis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. "
              </p>

              <h4>Mario Spe</h4>
            </div>
          </div>

          <div className="some__info">
            <span>
              <img
                src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/testi2.jpg"
                alt=""
              />
            </span>
            <div className="four__text">
              <h6 className="text-blue-600 text-5xl ">{"\u201C"}</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore. "
              </p>
              <h4>Petey Cru</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="heading ">
          <h1>Our Gallery</h1>
          <p className="lightblack">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque, eaque ipsa quae ab illo inventore.
          </p>
        </div>
        <div className="gallery__container">
          <div className="first__row row">
            <span>
              <img className="shine object-cover " src={nine} alt="" />
            </span>
            <span>
              <img src={three} alt="" />
            </span>
            <span>
              <img src={five} alt="" />
            </span>
            <span>
              <img src={seven} alt="" />
            </span>
          </div>
          <div className="second__row row">
            <div className="first__column">
              <span>
                <img src={eight} alt="" />
              </span>
              <span>
                <img src={two} alt="" />
              </span>
            </div>
            <span className="big__image">
              <img src={four} alt="" />
            </span>
            <div className="first__column">
              <span>
                <img src={two} alt="" />
              </span>
              <span>
                <img src={nine} alt="" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="five" className="goblack">
        <div className="dog__image">
          <img src={rr} alt="" />

          {/* <img
            src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/dog2.png"
            alt=""
          /> */}
        </div>
        <div className="dog__container">
          <div className="dog__boxes">
            <div className="dog__box">
              <span>
                <i className="fas fa-thumbs-up"></i>
              </span>
              <h4>Dog Sitting</h4>
              <p>
                Lorem ante ipsum primis in faucibus orci luctus eted ultrices
                posuere.
              </p>
            </div>
            <div className="dog__box">
              <span>
                <i className="fas fa-paw"></i>
              </span>
              <h4>Dog Sitting</h4>
              <p>
                Lorem ante ipsum primis in faucibus orci luctus eted ultrices
                posuere.
              </p>
            </div>
          </div>
          <div className="dog__boxes">
            <div className="dog__box">
              <span>
                <i className="fas fa-bullhorn"></i>
              </span>
              <h4>Dog Sitting</h4>
              <p>
                Lorem ante ipsum primis in faucibus orci luctus eted ultrices
                posuere.
              </p>
            </div>
            <div className="dog__box">
              <span>
                <i className="fas fa-cut"></i>
              </span>
              <h4>Dog Sitting</h4>
              <p>
                Lorem ante ipsum primis in faucibus orci luctus eted ultrices
                posuere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="six">
        <h5>PET LOVERS</h5>
        <h1>Our Team Is Filled With Highly Dedicated Pet Lovers</h1>
        <button className="btn w-btn">Read More</button>
      </section>

      <section id="seven" className="goblack">
        <div className="heading ">
          <h1>Latest News</h1>
          <p className="lightblack">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque, eaque ipsa quae ab illo inventore
          </p>
        </div>

        <div className="container container__bg goblack">
          <div className="info goblack">
            <span>
              <img src={wa1} />
            </span>
            <div className="info__text">
              <pre> May 5, 2021</pre>
              <h1>Hello world!</h1>

              <h5 className="">READ MORE ></h5>
            </div>
          </div>
          <div className="info goblack">
            <span>
              <img src={wa5} alt="" />
            </span>
            <div className="info__text">
              <pre> May 5, 2021</pre>
              <h1>How to keep your dog cool this summer</h1>

              <h5 className="">READ MORE ></h5>
            </div>
          </div>
          <div className="info goblack">
            <span>
              <img src={wa3} alt="" />
            </span>
            <div className="info__text">
              <pre> May 5, 2021</pre>
              <h1>Solution for grooming behavior problems</h1>

              <h5 className="">READ MORE ></h5>
            </div>
          </div>
        </div>
      </section>

      <footer id="eight">
        <div className="footer__container">
          <div className="dog__care ">
            <span href="#">
              <i className="fas fa-paw "></i>
              Pickyourtrial
            </span>
            <p>
              Duis imperdiet sapien tortor, vitae congue diam auctor vitae.
              Aliquam eget turpis ornare, euismod ligul aeget, enenatis dui.
            </p>
          </div>
          <div className="dog__categories">
            <h3>CATEGORIES</h3>
            <div className="categories">
              <ul>
                <li>> Dog</li>
                <li>> Dog Care</li>
                <li>> Pets</li>
                <li>> Uncategorized</li>
              </ul>
              <ul>
                <li>> May 2021</li>
                <li>> April 2021</li>
              </ul>
            </div>
          </div>
          <div className="newsletter">
            <h3>NEWSLETTER</h3>
            <h3>SUBSCRIBE HERE NOW</h3>
            <span>
              <button className="btn">
                <i className="far fa-paper-plane"></i>
              </button>
            </span>
            <p>
              Subscribe to our mailing list and get updates to your email inbox.
            </p>
          </div>
        </div>

        <div className="copyright">
          <p>
            &#169; 2021 Pickyourtrial. All Rights Reserved | WordPress Theme by{" "}
            <strong>W3Layouts.</strong>{" "}
          </p>

          <div className="share">
            <div>
              <i className="fab fa-facebook-f"></i>
            </div>
            <div>
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div>
              <i className="fab fa-twitter"></i>
            </div>
            <div>
              <i className="fab fa-google-plus-g"></i>
            </div>
            <div>
              <i className="fab fa-github"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

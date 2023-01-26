import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="left__footer">
        <h1>Stvdy</h1>
        <p>
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br />{" "}
          Vivamus eget diam at mi <br /> sollicitudin
        </p>
      </div>
      <div className="center__footer">
        <h6>Nos services</h6>
        <p>
          Avis clients <br />
          Mentions légales <br />
          Plan du site <br />
          Blog d’Idéematic <br />
          Le dictionnaire du digital <br />‹ Notre boutique /›
        </p>
      </div>
      <div className="right__footer">
        <h6>Sign up for Special Offers!</h6>
        <form action="#" className="mail__form">
          <input type="text"  className="mail__input"/>
          <button className="subscribe">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

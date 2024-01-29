import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*left Side*/}
        <div className="flexColStart f-left">
          <span className="secondaryText">&copy; Kleiderspenden</span>
        </div>

        {/*right Side*/}
        <div className="flexColStart f-right">
          <span className="secondaryText">Rechtliche Hinweise</span>

          <div className="f-menu">
            <a href="#" className="navbottom">
              Impressum
            </a>
            <a href="#" className="navbottom">
              Datenschutzerklärung
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

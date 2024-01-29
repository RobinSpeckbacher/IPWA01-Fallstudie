import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="bgContent">
        <div className="box">
          <h1>Warum Kleiderspenden so wichtig sind</h1>
          <p>
            In einer Welt, die von Überfluss und Konsum geprägt ist, bietet das
            Teilen das Potenzial für echte Veränderung. Hier bei KleiderSpenden
            glauben wir an die Kraft der Kleiderspenden und wie sie Leben
            beeinflussen können. Deine nicht mehr benötigten Kleidungsstücke
            können zu einem neuen Kapitel für jemand anderen werden.
          </p>
          <a href="/spenden">Hier Spenden</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

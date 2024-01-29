import React from "react";
import "./cloth.css";

const Cloth = () => {
  return (
    <section className="clothingDesc flexContainer">
      <div className="leftContainer">
        <div className="upperText flexContainer">
          <div className="textContainer">
            <h1>Unsere Mission</h1>
            <p>
              In einer Welt, die von Überfluss und Konsum geprägt ist, bieten
              wir bei KleiderSpenden die Möglichkeit, einen positiven Einfluss
              zu schaffen. Durch das Teilen von Kleidung geben wir nicht nur
              ungenutzten Stücken ein zweites Leben, sondern schaffen auch
              Chancen für diejenigen, die Hilfe benötigen.
            </p>
          </div>

          <img className="TextImg" src="/shirt.png" alt="clothing" />

          <div className="textContainer">
            <h1>Unsere Werte</h1>
            <p>
              Bei KleiderSpenden sind Nachhaltigkeit und Gemeinschaft unsere
              Grundprinzipien. Wir glauben daran, dass jeder einen Beitrag zur
              Verbesserung der Welt leisten kann, indem er Kleidung teilt und
              somit einen Unterschied im Leben anderer Menschen macht.
            </p>
          </div>
        </div>
        <div className="lowerText flexContainer">
          <img className="jacketImg" src="/Jacket.png" alt="clothing" />

          <div className="textContainer">
            <h1>Unsere Vision</h1>
            <p>
              Unsere Vision ist es, eine Gemeinschaft aufzubauen, die sich für
              nachhaltige Praktiken engagiert und einen positiven sozialen
              Einfluss ausübt. Mit jeder Kleiderspende tragen wir dazu bei, dass
              Menschen in Not Unterstützung erhalten und gleichzeitig die
              Umwelt geschont wird.
            </p>
          </div>
        </div>
        <div className="shoeImg"></div>
      </div>
      <div className="rightContainer">
        <img className="Img" src="/manequin.png" alt="clothing" />
      </div>
    </section>
  );
};

export default Cloth;

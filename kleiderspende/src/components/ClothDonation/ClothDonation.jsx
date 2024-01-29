import React from "react";
import "./clothDonation.css";

const ClothDonation = () => {
  return (
    <section className="ClothDonation flexContainer">
      <div className="ContainerLeft">
        <div>
          <div className="container">
            <h1 className="primaryText">
              Gemeinsam für eine bessere Zukunft: Kleiderspenden, die Leben
              verändern
            </h1>
            <p className="secondaryText">
              Willkommen bei KleiderSpenden, dem Ort, an dem Großzügigkeit Stil
              bekommt! Unser Engagement für Gemeinschaft, Nachhaltigkeit und
              Mitgefühl spiegelt sich in jedem Stück wieder, das du spendest.
              Mach mit und werde Teil einer Bewegung, die nicht nur
              Kleiderschränke, sondern auch Leben füllt. Lass uns gemeinsam die
              Welt durch die Kraft des Gebens verändern.
            </p>
          </div>
          
        </div>
      </div>

      <img src="/shirt.png" alt="Logo" className="imageContainer" />
      <div className="ContainerRight">
        <div className="container">
        <h1 className="primaryText">Sie sind noch nicht überzeugt?</h1>
        <p className="secondaryText">
          Gemeinschaft fördern: Durch Kleiderspenden trägst du dazu bei, eine
          unterstützende Gemeinschaft aufzubauen. Deine Spenden werden zu einem
          Zeichen der Solidarität und Liebe für diejenigen, die sie erhalten.
        </p>
        <p className="secondaryText">
          Nachhaltigkeit fördern: Indem du deine Kleidung spendest, reduzierst
          du nicht nur Abfall, sondern förderst auch die Nachhaltigkeit. Jedes
          recycelte Kleidungsstück ist ein Schritt in Richtung einer grüneren,
          umweltfreundlicheren Welt.
        </p>
        <p className="secondaryText">
          Hilfe für Bedürftige: Deine Spenden können einen direkten Einfluss auf
          das Leben von Menschen haben, die sie dringend benötigen. Ob es um
          finanzielle Unterstützung, Arbeitskleidung oder Wärme für die kalten
          Monate geht – deine Kleiderspenden machen einen Unterschied.
        </p>
        </div>
      </div>
    </section>
  );
};

export default ClothDonation;

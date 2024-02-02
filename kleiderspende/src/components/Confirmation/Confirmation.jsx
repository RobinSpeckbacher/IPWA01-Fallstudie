import React from "react";
import { useLocation } from "react-router-dom";
import "./confirmation.css";

const Confirmation = () => {
  // Confirmation-Komponente
  const location = useLocation();
  const donationData = location.state?.donationData;
  console.log(donationData.time);
  return (
    <section className="confirmationContainer">
      <h1>Herzlichen Dank für Ihre großzügige Kleiderspende! </h1>
      <p>
        Ihre Bereitschaft, anderen zu helfen, macht einen bedeutenden
        Unterschied. Wir schätzen Ihre Unterstützung sehr.
      </p>
      <div className="ItemContainer">
        <p>Art der Kleidung: {donationData.clothingType}</p>
        <p>Krisengebiet: {donationData.crisisArea}</p>
        <div
          style={{
            display:
              donationData.pickupOption === "Abholung" ? "block" : "none",
          }}
        >
          <p>Abholadresse: {donationData.abholadresse}</p>
          <p>Datum: {donationData.date}</p>
          <p>Uhrzeit: {donationData.time}</p>
        </div>
      </div>
      <div className="FaqContainer">
        <p>Sollten Sie Fragen haben, kontaktieren Sie uns bitte unter.</p>
        <a className="buttonFaq" href="/contact">
          Kontakt
        </a>
      </div>
    </section>
  );
};

export default Confirmation;

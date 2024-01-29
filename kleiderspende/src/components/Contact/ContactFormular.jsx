import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com"; // Anpassung: emailjs-com statt @emailjs/browser
import "./contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef(); // Referenz Formular für EmailJS

  const onSubmit = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0x9uiky",
        "template_ewu4mkm",
        form.current,
        "PMrQ6GVOnuoux-TMy"
      )
      .then(
        (result) => {
          console.log(result.text);
          // nach dem erfolgreichen Versand weitere Aktionen durchführen
        },
        (error) => {
          console.log(error.text);
          // Fehlerbehandlung durchführen
        }
      );

    e.target.reset();
  };

  return (
    <>
      <div className="formContainer">
        <div className="formLeft">
          <div className="formTextContainer">
          <h1>Get in Touch</h1>
       
          <div className="contactContainer">
            <p>Tel:</p>
            <span>+111111111</span>
          </div>
          <div className="contactContainer">
            <p>Email:</p>
            <span>MaxMustermann@gmail.com</span>
          </div>
          <div className="contactContainer">
            <p>Adresse:</p>
            <span>Musterstraße 12, 1111 Musterort</span>
          </div>
          </div>
        </div>
        <form
          className="contactform"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                {errors.name && errors.name.type === "required" && (
                  <span className="invalid-feedback">Name is required</span>
                )}
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <input
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="invalid-feedback">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="col-12">
              <div className="form-group">
                <textarea
                  {...register("message", { required: true })}
                  name="message"
                  placeholder="Deine Nachricht"
                ></textarea>
                {errors.message && (
                  <span className="invalid-feedback">Message is required.</span>
                )}
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="button">
                <span className="button-text">Senden</span>
                <span className="button-icon fa fa-send"></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;

"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./screen2.css";
import us from "../../assets/images/us.png";
import ca from "../../assets/images/ca.png";
import help from "../../assets/images/help.png";
import pin from "../../assets/images/pin.png";

import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Screen2() {
  const submitForm = (values) => {
    console.log('first',values)
    axios
      .post(
        "api_link",
        values
      )
      .then((response) => {
        console.log("Response:", response);
        if (response.status === 200) {
        } else {
          console.log("Error without crash :", response);
        }
      })
      .catch((error) => {
        console.log("Error11:", error);
      })
      .finally(() => {});
  };
  const initialValues = {
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  };

  const validate = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      return {};
    } catch (validationErrors) {
      let errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      return errors;
    }
  };

  const validationSchema = yup.object().shape({
    Email: yup.string().required("Email is required").email("Invalid Email"),
    Name: yup.string().required("Name is required"),
    Phone: yup.string().required("Phone is required"),
    Message: yup.string().required("Message is required"),
  });

  const libraries = ["places"];
  const mapContainerStyle = {
    height: "500px",
    width: "100%",
    borderRadius: "0 12px 12px 0",
  };
  const center = {
    lat: 51.505,
    lng: -0.09,
  };

  const customIcon = "https://pin-test.netlify.app/pin.png";
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCuTilAfnGfkZtIx0T3qf-eOmWZ_N2LpoY",
    libraries,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <main>
      <div className="breadcrumb">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3>Get in Touch</h3>
            <Image
              src={help}
              alt="image"
              width={300}
              className="img-fluid my-auto"
            />
            <div className="CommunicationHub">
              <h2 className="mb-4">Communication Hub</h2>
              <div className="mb-4">
                <h5>Email</h5>
                <p>contact@customboxbuilder.com</p>
              </div>
              <div className="mb-4">
                <h5>Phone</h5>
                <div className="d-flex justify-content-between">
                  <p>
                    {" "}
                    <Image
                      src={us}
                      alt="image"
                      className="img-fluid my-auto"
                    />{" "}
                    (917) 994-6313
                  </p>
                  <p>
                    {" "}
                    <Image
                      src={ca}
                      alt="image"
                      className="img-fluid my-auto"
                    />{" "}
                    (647) 799-3467
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h5>Address</h5>
                <p>880 Steeprock Dr, North York, ON M3J 2X2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="help">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mb-4">
              <h3>
                We’re Here to <span className="helpSpan">Help</span>
              </h3>
              <p>
                Have a question or a unique, large-scale project? For orders
                over 2,000, we'll assign a dedicated client services rep to
                ensure your custom box design is executed flawlessly.
              </p>
            </div>{" "}
          </div>
          <div className="contactForm">
            <div className="container">
              <div className="row">
                <div className="col-md-6 sendMessage">
                  <h3 className="text-center mb-4">Send Us a Message</h3>
                  <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={submitForm}
                    validationSchema={validationSchema}
                  >
                    {(formik) => {
                      const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty,
                      } = formik;
                      return (
                        <form onSubmit={handleSubmit}>
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="Name"
                                    placeholder="Full Name"
                                    value={values.Name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${
                                      errors.Name &&
                                      touched.Name &&
                                      "input-error"
                                    }`}
                                  />
                                  {errors.Name && touched.Name && (
                                    <p className="error">{errors.Name}</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="Email"
                                    name="Email"
                                    placeholder="Email"
                                    value={values.Email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${
                                      errors.Email &&
                                      touched.Email &&
                                      "input-error"
                                    }`}
                                  />
                                  {errors.Email && touched.Email && (
                                    <p className="error">{errors.Email}</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="Phone"
                                    placeholder="Phone Number"
                                    value={values.Phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${
                                      errors.Phone &&
                                      touched.Phone &&
                                      "input-error"
                                    }`}
                                  />
                                  {errors.Phone && touched.Phone && (
                                    <p className="error">{errors.Phone}</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    type="text"
                                    name="Message"
                                    rows={5}
                                    placeholder="Your Message"
                                    value={values.Message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${
                                      errors.Message &&
                                      touched.Message &&
                                      "input-error"
                                    }`}
                                  />
                                  {errors.Message && touched.Message && (
                                    <p className="error">{errors.Message}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="btn_block">
                            <button
                              type="submit"
                              className={`submitBtn ms-0 ${
                                !(dirty && isValid) && "disabledBtn"
                              }`}
                              disabled={!(dirty && isValid)}
                            >
                              Submit
                            </button>
                            <div className="btn_bottom"></div>
                          </div>
                        </form>
                      );
                    }}
                  </Formik>
                </div>
                <div className="col-md-6 p-0">
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={13}
                  >
                    <Marker position={center} icon={customIcon} size={5} />
                  </GoogleMap>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

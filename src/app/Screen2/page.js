"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./screen2.css";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import box1 from "../../assets/images/box1.png";
import box2 from "../../assets/images/box2.png";
import us from "../../assets/images/us.png";
import ca from "../../assets/images/ca.png";
import help from "../../assets/images/help.png";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";

import Form from "react-bootstrap/Form";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";

export default function Screen2() {
  const submitForm = (values) => {
    axios
      .post(
        "https://friendly-blackwell.208-109-229-253.plesk.page/api/Auth/Login",
        values
      )
      .then((response) => {
        console.log("Response:", response.data);
        if (response.status === 200) {
        } else {
          console.log("Error without crash :", response.data);
        }
      })
      .catch((error) => {
        console.log("Error11:", error.response.data);
      })
      .finally(() => {});
  };
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
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
    email: yup.string().required("Email is required").email("Invalid Email"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password too short")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
  });

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
                <div className="col-md-6">
                  <h3>Send Us a Message</h3>
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
                                    name="email"
                                    placeholder="Full Name"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${
                                      errors.email &&
                                      touched.email &&
                                      "input-error"
                                    }`}
                                  />
                                  {errors.email && touched.email && (
                                    <p className="error">{errors.email}</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${
                                      errors.email &&
                                      touched.email &&
                                      "input-error"
                                    }`}
                                  />
                                  {errors.email && touched.email && (
                                    <p className="error">{errors.email}</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="email"
                                    placeholder="Phone Number"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${
                                      errors.email &&
                                      touched.email &&
                                      "input-error"
                                    }`}
                                  />
                                  {errors.email && touched.email && (
                                    <p className="error">{errors.email}</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    type="text"
                                    name="email"
                                    rows={5}
                                    placeholder="Your Message"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${
                                      errors.email &&
                                      touched.email &&
                                      "input-error"
                                    }`}
                                  />
                                  {errors.email && touched.email && (
                                    <p className="error">{errors.email}</p>
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
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

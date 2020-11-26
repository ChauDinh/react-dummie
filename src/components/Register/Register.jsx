import React from "react";
import { Formik, Form } from "formik";

import "./Register.style.css";

const initialRegisterValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={initialRegisterValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          window.location.replace("/login");
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Username is required!";
          } else if (!values.email) {
            errors.email = "Email is required!";
          } else if (!values.password) {
            errors.password = "Password is required!";
          } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword =
              "Confirm password must be matched password";
          }
          console.log(errors);
          return errors;
        }}
      >
        {({
          isSubmitting,
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <Form className="register__container" onSubmit={handleSubmit}>
            <input
              className="register__input"
              placeholder="Username"
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <p className="register__errorMsg">
              {errors.username && touched.username && errors.username}
            </p>
            <input
              className="register__input"
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <p className="register__errorMsg">
              {errors.email && touched.email && errors.email}
            </p>
            <input
              className="register__input"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <p className="register__errorMsg">
              {errors.password && touched.password && errors.password}
            </p>
            <input
              className="register__input"
              placeholder="Confirm password"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <p className="register__errorMsg">
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
            </p>

            <button
              className="register__btn"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;

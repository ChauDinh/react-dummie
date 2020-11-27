import React from "react";
import { Formik, Form } from "formik";

import "./Login.style.css";

const initialLoginValues = {
  usernameEmail: "",
  password: "",
};

export const Login = () => {
  return (
    <div>
      <Formik
        initialValues={initialLoginValues}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          window.location.replace("/");
        }}
        validate={(values) => {
          const errors = {};
          if (!values.usernameEmail) {
            errors.usernameEmail = "Username or email is required!";
          } else if (!values.password) {
            errors.password = "Password is required!";
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
          <Form className="login__container" onSubmit={handleSubmit}>
            <input
              className="login__input"
              placeholder="Username or email"
              type="text"
              name="usernameEmail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.usernameEmail}
            />
            <p className="login__errorMsg">
              {errors.usernameEmail &&
                touched.usernameEmail &&
                errors.usernameEmail}
            </p>
            <input
              className="login__input"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <p className="login__errorMsg">
              {errors.password && touched.password && errors.password}
            </p>

            <button
              className="login__btn"
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

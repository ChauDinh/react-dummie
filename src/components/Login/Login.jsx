import React from "react";
import { Formik, Form } from "formik";
import bcrypt from "bcryptjs";

import "./Login.style.css";
import { fetchSingleUserFromDb } from "../../utils/fetchUserDataFromDb";

const initialLoginValues = {
  email: "",
  password: "",
};

export const Login = () => {
  return (
    <div>
      <Formik
        initialValues={initialLoginValues}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          const fetchedUser = await fetchSingleUserFromDb(
            `http://localhost:8080/users?email=${values.email}`
          );
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          if (!fetchedUser) {
            window.location.reload();
          }
          const isValidPassword = bcrypt.compareSync(
            values.password,
            fetchedUser[0].password
          );
          if (!isValidPassword) {
            window.location.reload();
          } else {
            await fetch("http://localhost:8080/sessions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: fetchedUser[0].id,
              }),
            });
            window.location.replace("/");
          }
          return;
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required!";
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
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.usernameEmail}
            />
            <p className="login__errorMsg">
              {errors.email && touched.email && errors.email}
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

import React from "react";
import { Formik, Form } from "formik";
import bcrypt from "bcryptjs";

import "./Login.style.css";
import { fetchMultiplesUsersFromDb } from "../../utils/fetchMultipleUsersFromDb";

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
          const errorsLogin = {};
          const fetchedUsers = await fetchMultiplesUsersFromDb(
            "http://localhost:8080/users/"
          );
          const fetchedUserEmails = fetchedUsers.map(
            (fetchedUser) => fetchedUser.email
          );
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          if (fetchedUserEmails.includes(values.email)) {
            const userIdx = fetchedUserEmails.indexOf(values.email);
            const isValidPassword = bcrypt.compareSync(
              values.password,
              fetchedUsers[userIdx].password
            );
            if (isValidPassword) {
              await fetch("http://localhost:8080/sessions", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userId: userIdx,
                }),
              });
              window.location.replace("/");
            } else {
              // window.location.reload();
              errorsLogin.email = "Something went wrong!";
              errorsLogin.password = "Something went wrong!";
            }
          } else {
            // window.location.reload();
            errorsLogin.email = "Something went wrong!";
            errorsLogin.password = "Something went wrong!";
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

import React from "react";
import { singUpSchema } from "./schemas";
import { useFormik } from "formik";

const initialValues = {
    name:"",
    email:"",
    password:"",
    confirm_password:""
}

export default function FormValidation() {

   const {values, errors,touched,handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues: initialValues,
        validationSchema: singUpSchema,
        onSubmit: (values)=>{
            console.log(values);
        }
    })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            type="name"
            id="name"
            autoComplete="off"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name? <p>{errors.name}</p>:null}
        </div>
        <div>
          <input
            name="email"
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {errors.email && touched.email? <p>{errors.email}</p>:null}
        </div>
        <div>
          <input
            name="password"
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password? <p>{errors.password}</p>:null}
        </div>
        <div>
          <input
            name="confirm_password"
            type="password"
            id="confirm_password"
            autoComplete="off"
            placeholder="Confirm Password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
         {errors.confirm_password && touched.confirm_password? <p>{errors.confirm_password}</p>:null}
        </div>
        <button type="submit">add</button>
      </form>
    </>
  );
}

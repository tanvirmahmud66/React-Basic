import * as Yup from "yup"

export const singUpSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email address"),
    password: Yup.string().min(6).required("Please enter password"),
    confirm_password: Yup.string().required("password must match").oneOf([Yup.ref('password'),null])
})
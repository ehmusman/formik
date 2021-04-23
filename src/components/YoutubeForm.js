import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"

const initialValues = {
    name: "",
    email: "",
    channel: ""
}
const onSubmit = values => {
    console.log("form data", values)
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string()
        .email("Invalid emaill formate")
        .required("Email is Required"),
    channel: Yup.string().required("Channel is Required")
})
const YoutubeForm = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    })
    console.log("formik", formik)
    console.log("visited", formik.touched)
    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type="text"
                    name="name"
                    id="name"
                    onBlur={formik.handleBlur}
                    className={`form-control ${formik.touched.name && formik.errors.name ? "is-invalid" : ""}`} />
                <div className="invalid-feedback">
                    {formik.errors.name}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    name="email"
                    id="email"
                    onBlur={formik.handleBlur}
                    className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`} />
                <div className="invalid-feedback">
                    {formik.errors.email}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="channel">Channel</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.channel}
                    type="text"
                    name="channel"
                    id="channel"
                    onBlur={formik.handleBlur}
                    className={`form-control ${formik.touched.channel && formik.errors.channel ? "is-invalid" : ""}`} />
                <div className="invalid-feedback">
                    {formik.errors.channel}
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
    )
}

export default YoutubeForm

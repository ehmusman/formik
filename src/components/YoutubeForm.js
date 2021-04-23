import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const YoutubeForm = () => {
    const initialValues = {
        name: "",
        email: "",
        channel: "",
        comments: "",
        address: "",
        social: {
            facebook: "",
            twitter: ""
        },
        phoneNumbers: ["", ""]
    }
    const onSubmit = values => {
        console.log("form data", values)
    }
    // console.log(Yup.object())
    const validationSchema = Yup.object({
        name: Yup.string().min(3).max(100).required("Name is Required"),
        email: Yup.string().min(3).max(100)
            .email("Invalid emaill formate")
            .required("Email is Required"),
        channel: Yup.string().min(3).max(100).required("Channel is Required"),
        comments: Yup.string().min(3).max(100).required("Comment is Required"),
        address: Yup.string().min(3).max(100).required("Address is Required"),
        social: Yup.object({
            facebook: Yup.string().min(3).max(100).required("Facebook is Required"),
            twitter: Yup.string().min(3).max(100).required("Twitter is Required"),
        }),
        phoneNumbers: Yup.array().of(Yup.string().min(5).max(20).required("Phone Number is Required"))
    })
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {props => {
                console.log(props)
                const { errors, touched } = props
                const { social: socialT, phoneNumbers: phoneNumbersT } = touched
                const { social: socialE, phoneNumbers: phoneNumbersE } = errors
                return <Form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field
                            className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
                            type="text"
                            name="name"
                            id="name"
                        />
                        <ErrorMessage name="name" >
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                            className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                            type="email"
                            name="email"
                            id="email"
                        />
                        <ErrorMessage name="email" >
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>

                    </div>
                    <div className="form-group">
                        <label htmlFor="channel">Channel</label>
                        <Field
                            className={`form-control ${touched.channel && errors.channel ? "is-invalid" : ""}`}
                            type="text"
                            name="channel"
                            id="channel"
                        />
                        <ErrorMessage name="channel" >
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments">Comments</label>
                        <Field
                            as="textarea"
                            id="comments"
                            name="comments"
                            className={`form-control ${touched.comments && errors.comments ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage name="comments" >
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <Field
                            id="address"
                            name="address"
                            className={`form-control ${touched.address && errors.address ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage name="address" >
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="facebook">Facebook</label>
                        <Field
                            id="facebook"
                            name="social.facebook"
                            className={`form-control ${socialT && socialT.facebook && socialE && socialE.facebook ? "is-invalid" : ""}`}

                        />
                        <ErrorMessage name="social.facebook" >
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <Field
                            id="twitter"
                            name="social.twitter"
                            className={`form-control ${socialT && socialT.twitter && socialE && socialE.twitter ? "is-invalid" : ""}`}

                        />
                        <ErrorMessage name="social.twitter" >
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="primaryPh">Primary Phone</label>
                        <Field
                            id="primaryPh"
                            name="phoneNumbers[0]"
                            className={`form-control ${phoneNumbersT && phoneNumbersT[0] && phoneNumbersE && phoneNumbersE[0] ? "is-invalid" : ""}`}

                        />
                        <ErrorMessage name="phoneNumbers[0]" >
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="form-group">
                        <label htmlFor="secondaryPh">Secondary Phone</label>
                        <Field
                            id="secondaryPh"
                            name="phoneNumbers[1]"
                            className={`form-control ${phoneNumbersT && phoneNumbersT[1] && phoneNumbersE && phoneNumbersE[1] ? "is-invalid" : ""}`}
                        />
                        <ErrorMessage name="phoneNumbers[1]" >
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </Form>
            }}

        </Formik>
    )
}

export default YoutubeForm

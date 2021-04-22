import React from 'react'
import { useFormik } from "formik"
const YoutubeForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            channel: ""
        }
    })
    console.log(formik)
    return (
        <form className="container">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type="text"
                    name="name"
                    id="name"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    name="email"
                    id="email"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="channel">Channel</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.channel}
                    type="text"
                    name="channel"
                    id="channel"
                    className="form-control" />
            </div>
            <button className="btn btn-primary btn-block">Submit</button>
        </form>
    )
}

export default YoutubeForm

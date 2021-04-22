import React from 'react'

const YoutubeForm = () => {
    return (
        <form className="container">
            <div className="form-group">
                <lable htmlFor="name">Name</lable>
                <input type="text" name="name" id="name" className="form-control" />
            </div>
            <div className="form-group">
                <lable htmlFor="email">Email</lable>
                <input type="email" name="email" id="email" className="form-control" />
            </div>
            <div className="form-group">
                <lable htmlFor="channem">Channel</lable>
                <input type="text" name="channem" id="channem" className="form-control" />
            </div>
            <button className="btn btn-primary btn-block">Submit</button>
        </form>
    )
}

export default YoutubeForm

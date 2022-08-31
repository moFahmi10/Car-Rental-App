import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {useState} from "react";


const CarList = ({ blogs }) => {

    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div  className="blog-preview"  >
                    <h2> <img className="image" src ={blog.image}></img> </h2>
                    <h2 className="Text">Car Brand: {blog.manufacturer}</h2>
                    <h2 className="Text">Car Model: {blog.model}</h2>
                    <h2 className="Text">Car Plate: {blog.plate}</h2>
                    <h2 className="Text">Car color: {blog.color}</h2>
                    <h2 className="Text">Car year: {blog.year}</h2>
                    <h2 className="Text">Car status: {blog.car_status}</h2>
                    <h2 className="Text">Reservation #: {blog.reservation_number}</h2>
                    <h2  className="Text">User email: {blog.email}</h2>
                    <h2  className="Text">Total Price: {blog.total_price}</h2>
                    <h2  className="Text">Pick up date: {blog.pickup_date}</h2>
                    <h2  className="Text">Return date: {blog.return_date}</h2>
                    <h2  className="Text">Payment Status: {blog.paid}</h2>
                </div>

            ))
            }
        </div>

    );
}

export default CarList;
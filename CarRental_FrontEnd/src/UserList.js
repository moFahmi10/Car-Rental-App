import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {useState} from "react";


const UserList = ({ blogs }) => {

    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div  className="blog-preview"  >
                    <h2 className="Text">First Name: {blog.fname}</h2>
                    <h2 className="Text">Last Name: {blog.lname}</h2>
                    <h2 className="Text">Email: {blog.email}</h2>
                    <h2 className="Text">Reservation #: {blog.reservation_number}</h2>
                    <h2  className="Text">Car Plate: {blog.plate}</h2>
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

export default UserList;
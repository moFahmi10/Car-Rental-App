import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {useState} from "react";


const BlogList = ({ blogs }) => {
    const history = useHistory();
    const [plate,setPlate] = useState("");
    const click = () => {
        history.push("./payment")
    }
    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div  className="blog-preview" key={blog.plate} >
                    <h2> <img className="image" src ={blog.image}></img> </h2>
                    <h2 className="Text"> {blog.manufacturer}</h2>
                    <h2 className="Text"> {blog.model}</h2>
                    <h2 className="Text">Year: {blog.year}</h2>
                    <h2 className="Text">Color: {blog.color }</h2>
                    <h2  className="Text">Plate: {blog.plate}</h2>
                    <h2  className="Text">Price per day: {blog.price}</h2>
                    <div ><button onAnimationEnd={()=>  setPlate(blog.plate)}  onClick={()=>{
                        sessionStorage.setItem("plate",blog.plate)
                        sessionStorage.setItem("region",blog.region)
                        sessionStorage.setItem("price",blog.price)
                        click()
                    }} className="Rent">Rent</button></div>
                </div>

            ))
            }
        </div>

    );
}

export default BlogList;
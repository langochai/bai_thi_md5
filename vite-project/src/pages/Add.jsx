import {Button} from "@mui/material";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import TourService from "../service/tour.service.js";

export const Add = () => {
    const [newTour, setNewTour] = useState({});
    const navigate = useNavigate()
    const handleChange = (e) => {
        setNewTour({
            ...newTour,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = () => {
        TourService.addTour(newTour)
            .then((result) => {
                console.log("added")
                navigate("/")
            })
            .catch((err) => {
                console.log("err")
            })
    }
    return (
        <>
            <h1>Add a tour</h1>
            <p>Tour name:</p>
            <input type="text" name="title" onChange={handleChange}/>
            <p>Price:</p>
            <input type="text" name="price" onChange={handleChange}/>
            <p>Description:</p>
            <textarea name="description" onChange={handleChange} style={{width:"80vw"}}/>
            <br/>
            <Button variant="contained" onClick={handleClick}>Add</Button>
            <Link to="/">
                <Button variant="contained" color="error">Cancel</Button>
            </Link>
        </>
    )
}
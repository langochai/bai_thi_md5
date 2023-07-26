import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import TourService from "../service/tour.service.js";

export const Update = (props) => {
    const location = useLocation();
    const id = location.state.id;
    const navigate = useNavigate()
    const [tour, setTour] = useState({})
    useEffect(() => {
        TourService.getOneTour(id)
            .then(result => {
                setTour(result.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const handleChange = (e) => {
        setTour({
            ...tour,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = () => {
        TourService.updateTour(id, tour)
            .then((result) => {
                console.log("updated")
                navigate("/")
            })
            .catch((err) => {
                console.log("err")
            })
    }
    return (
        <>
            <h1>Update a tour</h1>
            <p>Tour name:</p>
            <input type="text" name="title" onChange={handleChange} value={tour.title}/>
            <p>Price:</p>
            <input type="text" name="price" onChange={handleChange} value={tour.price}/>
            <p>Description:</p>
            <textarea name="description" onChange={handleChange} value={tour.description}
                      style={{width: "80vw"}}/>
            <br/>
            <Button variant="contained" onClick={handleClick}>Update</Button>
            <Link to="/">
                <Button variant="contained" color="error">Cancel</Button>
            </Link>
        </>
    )
}
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import TourService from "../service/tour.service.js";
import {Button} from "@mui/material";

export const Delete = () => {
    const location = useLocation();
    const id = location.state.id;
    const navigate = useNavigate()
    const [tour, setTour] = useState({})
    const handleClick = () => {
        TourService.deleteTour(id)
            .then(result => {
                console.log("deleted")
                navigate("/")
            })
            .catch(err => {
                console.log("error")
            })
    }
    useEffect(() => {
        TourService.getOneTour(id)
            .then(result => {
                setTour(result.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <h1>TOUR DETAIL</h1>
            <br/>
            <h3>Tour du lịch {tour.title}</h3>
            <br/>
            <p>Giá : {tour.price}</p>
            <br/>
            <p>Giới thiệu: {tour.description}</p>
            <br/>
            <Button variant="contained" color="error" onClick={handleClick}>Delete !!!</Button>
            <Link to="/">
                <Button variant="contained">God please no!</Button>
            </Link>

        </>
    )
}
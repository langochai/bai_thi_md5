import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import TourService from "../service/tour.service.js";
import {Button} from "@mui/material";

export const Detail = () => {
    const location = useLocation();
    const id = location.state.id;
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
    return (
        <>
            <h1>TOUR DETAIL</h1>
            <br/>
            <h3>Tour du lịch {tour.title}</h3>
            <br/>
            <p>Giá : {tour.price}</p>
            <br/>
            <p>Giới thiệu: {tour.description}</p>
            <Link to="/"><Button variant="contained" color="success">Back</Button></Link>
        </>
    )
}
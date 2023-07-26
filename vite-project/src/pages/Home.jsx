import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import TourService from "../service/tour.service.js";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

export function Home() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        TourService.getAllTour()
            .then((result) => {
                setTours(result.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, []);

    return (
        <>
            <Link to="/add">
                <Button variant="contained">Add</Button>
            </Link>
            <TableContainer component={Paper} sx={{width: "1000px"}}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tours.length > 0 && tours.map((tour, index) => (
                            <TableRow
                                key={index}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {index}
                                </TableCell>
                                <TableCell align="right">
                                    <Link to="detail" state={{id: tour.id}}>
                                        {tour.title}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">{tour.price}</TableCell>
                                <TableCell align="right">
                                    <Link to="/update" state={{id: tour.id}}>
                                        <Button variant="contained" color="success">Edit</Button>
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link to="/delete" state={{id: tour.id}}>
                                        <Button variant="contained" color="error">Delete</Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
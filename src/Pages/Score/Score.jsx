import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleChangeScore, handleSelectQuestionAmount } from "../../redux/actions";
import "./Score.css";



const Score = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { score } = useSelector((state) => state);

    const handleReturnHome = () => {
        dispatch(handleChangeScore(0));
        dispatch(handleSelectQuestionAmount(20));
        navigate("/")
    };


    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" align="center" mb={4} color="darkslateblue">Final Score: {score} </Typography>
           
           <Box display="flex" justifyContent="center"  width="50vw" height="20vh" alignItems="center">
            <button className="homeBtn" onClick={handleReturnHome}>
                Home
            </button>
            </Box>
        </Box>
    )
}

export default Score;
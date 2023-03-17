import './Home.css';
import {Typography, Button, CircularProgress, Box, } from '@mui/material';
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SelectField from "../../components/selectOptions/SelectField";
import TextFieldComp from '../../components/selectOptions/TextFieldComp';
import useAxios from "../../hooks/useAxios";
import quizIcon from "../../assets/images/quizIcon.png";



const Home = () => {
    let navigate = useNavigate();
    const { res, loading, error } = useAxios({ url: '/api_category.php'});

    if (loading) {
        return (
            <Box>
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return (
            <Typography color="red">
                Sorry, something went wrong. Please try again!
            </Typography>
        )
    }

    const selectQuestionType = [
        {name: "Multiple Choice", id: "multiple"},
        {name: "True or False", id: "boolean"}
    ];

    const selectDifficulty = [
        {name: "Easy", id: "easy"},
        {name: "Medium", id: "medium"},
        {name: "Hard", id: "hard"}
    ];

    const handleQuizStart = (e) => {
        e.preventDefault();
        navigate('/quiz')
    };

    return (
        <div className='homeContainer'>
            <Box className="selectSettings" display="flex" flexDirection="column" alignItems="center">
            <form onSubmit={handleQuizStart}>
                <SelectField options={res.trivia_categories} label='Select Category' />
                <SelectField options={selectDifficulty} label='Select Difficulty' />
                <SelectField options={selectQuestionType} label="Select Question Type" />
                <TextFieldComp />
                <Box mt={5} width="100%" display="flex" flexDirection="column">
                    <Button type="submit" variant='contained' className='startQuiz'>
                         Start Quiz
                    </Button>
                </Box>
            </form>
            </Box>
            <img src={quizIcon} className="quizBanner" alt="quiz image" />
        </div>
    )

       
    
                          
};
export default Home;
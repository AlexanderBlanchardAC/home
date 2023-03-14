import React, { useState, useEffect } from "react";
import { Box, Button, Typography, CircularProgress, makeStyles } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../hooks/useAxios";
import { handleChangeScore } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { decode } from "html-entities";
import useSound from "use-sound";
import correctSound from "../../assets/audio/correctSound.mp3";
import incorrectSounds from "../../assets/audio/incorrectSounds.mp3";
import "./Quiz.css";

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};




const Quiz = () => {

  

   const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_questions,
    score
   } = useSelector((state) => state);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   let quizApiUrl = `/api.php?amount=${amount_of_questions}`;
   if (question_category) {
    quizApiUrl = quizApiUrl.concat(`&category=${question_category}`);
   }
   if (question_difficulty) {
    quizApiUrl = quizApiUrl.concat(`&difficulty=${question_difficulty}`);
   }
   if (question_type) {
    quizApiUrl = quizApiUrl.concat(`&type=${question_type}`);
   }

   const { res, loading } = useAxios({ url: quizApiUrl});
   const [questionIndex, setQuestionIndex] = useState(0);
   const [options, setOptions] = useState([]);
  const [buttonColor, setButtonColor] = useState("lightBlue")
  const [playCorrect] = useSound(correctSound)
  const [playIncorrect] = useSound(incorrectSounds)
  const[className, setClassName] = useState("answer")

   useEffect(() => {
    if(res?.results.length) {
        const question = res.results[questionIndex];
        let answerOptions = [...question.incorrect_answers];
        answerOptions.splice(
            getRandomNumber(question.incorrect_answers.length),
            0,
            question.correct_answer
        );
        setOptions(answerOptions)
            
    }
   
   }, [res, questionIndex]);

   if (loading) {
    return (
        <Box>
            <CircularProgress />
        </Box>
    )
   }



// const play = () => {
//     playCorrect()
// }
   


   const handleAttemptAnswer = (e) => {
    const question = res.results[questionIndex];


       

    if (e.target.textContent === question.correct_answer) {
      
        dispatch(handleChangeScore(score + 1));
        playCorrect()
        alert("Correct!")
        
      
       
       
       
      
      }
        
    
    if (e.target.textContent !== question.correct_answer) {
      
        playIncorrect()
        alert(`Good try, the correct answer is ${( question.correct_answer)}`)
       
        
    }
    if (questionIndex + 1 < res.results.length) {
        setTimeout(() => {

        setQuestionIndex(questionIndex + 1);
        }, 2000)
    } 

    
    else {
        setTimeout(() => {
        navigate("/score")
        }, 4000)
    }
   };

 


    return (
      
        
        <Box display="flex" flexDirection="column" alignItems="center" border={2} p={2} borderColor="lightgray">
            <Box display="flex" flexDirection="column" width="90vw">
            <Typography mb={0.5} variant="h4" align="center">Question {questionIndex + 1} / {res.results.length}</Typography>

             <Box  fontSize="3vh" alignSelf="flex-end" mb={2} mr={2}>
                Score: {score} / {res.results.length}
            </Box> 
            </Box>
            <Typography variant="h6" mb={1} align="center">{decode(res.results[questionIndex].question)}</Typography>
            <Box  display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="50%" height="35vh">
            {options.map((data, id) => (
                <Box onClick={handleAttemptAnswer} className="answer" border={4} key={id} display="flex"  ml={4} mr={4} mb={2} mt={1} width="30vw" minHeight="5vh" maxHeight="fitContent" justifyContent="center" borderRadius={5} borderColor="lightGrey" backgroundColor={buttonColor} >
                   
                         <Button id="answerButton">{decode(data)}</Button>
                    
                </Box>
            ))}
            </Box>
            <Box display="none">
         
            </Box>
        
        </Box>
        
    )
};

export default Quiz
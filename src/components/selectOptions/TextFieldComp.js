import React from "react";
import { Box, FormControl, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleSelectQuestionAmount } from "../../redux/actions";


const TextFieldComp = () => {
    const dispatch= useDispatch();
    const handleChange = (e) => {
        dispatch(handleSelectQuestionAmount(e.target.value));
    };

    return(
        <Box width="100%" mt={5}>
            <FormControl>
                <TextField
                    onChange={handleChange}
                    label="Amount of Questions"
                    type="number"
                    size="small"
                    variant="outlined"
                    />
            </FormControl>
        </Box>
    )
};

export default TextFieldComp;

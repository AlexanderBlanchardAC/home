import React, { useState } from "react";
import { Box, Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleSelectCategory, handleSelectQuestionType, handleSelectDifficulty} from "../../redux/actions";


const SelectField = ({ label, options}) => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        switch (label) {
            case "Select Category":
                dispatch(handleSelectCategory(e.target.value));
                break;
            case "Select Difficulty":
                dispatch(handleSelectDifficulty(e.target.value));
                break;
            case "Select Question Type":
                dispatch(handleSelectQuestionType(e.target.value));
                break;
                default:
                    return; 

        }
    
    };


    return (
       <Box width="100%" mt={5}>
            <FormControl fullWidth size="small" >
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {options.map(({ id, name }) => (
                        <MenuItem value={id} key={id} >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
        
    )
}

export default SelectField;


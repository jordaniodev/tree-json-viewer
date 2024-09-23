import { useState } from "react";
import { Button, Tooltip } from "@mui/material";
import { FormJsonContainer, FormJsonField } from "./FormJson.style";

interface FormJsonProps {
    onSubmit: (jsonValue: string) => void;
}

export const FormJson = ({ onSubmit }: FormJsonProps) => {
    const [jsonValue, setJsonValue] = useState("");
    const [isJsonValid, setIsJsonValid] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;

        if(value !== "") {
            setJsonValue(value);
            validateJson(value);
        }
    };

    const validateJson = (value: string) => {

        try {
            JSON.parse(value);
            setIsJsonValid(true);
        } catch (error) {
            setIsJsonValid(false);
        }
    };

    const handleButtonClick = () => {
        if (isJsonValid) {
            onSubmit(jsonValue);
        }
    };

    return (
        <FormJsonContainer>
            <FormJsonField
                name="jsonInput"
                id="jsonInput"
                placeholder="Json here"
                value={jsonValue}
                onChange={handleInputChange}
                className={!isJsonValid && jsonValue !== "" ? 'error': ''}
                aria-invalid={!isJsonValid}
            />
            <Tooltip title={!isJsonValid ? "Please enter a valid JSON." : ""} arrow>
                <span>
                    <Button 
                        variant="contained" 
                        onClick={handleButtonClick} 
                        disabled={!isJsonValid}
                    >
                        Visualize
                    </Button>
                </span>
            </Tooltip>
        </FormJsonContainer>
    );
};

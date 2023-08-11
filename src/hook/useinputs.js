import { useState } from 'react';

const useInputs = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        setValues((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    return [values, handleChange, setValues];
};
export default useInputs;

/* 
useInputs({
    email:
    paswword:
})

<input onChange={handleChange} name="email"/> // 안녕하세요

const obj = {
    email: "",
    paswword: "",
};

obj[e.taget.name] = ""
obj[e.taget.name] = "안녕하세요"
*/

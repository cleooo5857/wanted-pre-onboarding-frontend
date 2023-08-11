import { useEffect, useState } from 'react';

const useHomeRegexp = (email, password) => {
    const [disabled, setDisabled] = useState(true);
  
    useEffect(() => {
        if (email.includes('@') && password.length >= 8) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [email, password]);

    return disabled;
};

export default useHomeRegexp;

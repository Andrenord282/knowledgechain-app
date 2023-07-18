//-----hooks-----//
import { useEffect } from 'react';

const useFormErrorLoglist = (dependentInput, inputFieldName, setFormErrorLogList) => {
    useEffect(() => {
        setFormErrorLogList((prevErrorLogList) => {
            const newErrorLogList = { ...prevErrorLogList };
            for (const error in newErrorLogList) {
                if (newErrorLogList[error].name === inputFieldName) {
                    delete newErrorLogList[error];
                }
            }
            return { ...newErrorLogList };
        });
    }, [dependentInput, inputFieldName, setFormErrorLogList]);
};

export default useFormErrorLoglist;

import { errorLog } from "./logger";

export const extractErrorMessage = error =>
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString();

const HandleError = (action, error) => {
    const message = extractErrorMessage(error);
    errorLog(`${action} failed: ${message}`);
    return {
        error: true,
        message,
    };
};

export default HandleError;

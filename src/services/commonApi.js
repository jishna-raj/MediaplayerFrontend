import axios from "axios";

export const commonApi =async (httpRequest, url, reqBody) => {
    const reqConfig = {
        method: httpRequest,
        url: url,
        data: reqBody,
        headers: {
            "Content-Type": "application/json"
        }
    };

    return await axios(reqConfig)
        .then((result) => {
            return result;  // Return the result if successful
        })
        .catch((err) => {
            return err;  // Throw the error to handle it outside
        });
};

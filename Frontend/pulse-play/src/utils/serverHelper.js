import { backendURL } from "./config.js"
// import axios from "axios"

// // for making calls which dont need authentication
// export const makeUnauthenticatedPOSTRequest = async (route, body) => {
//     const response = await axios({
//         method: 'post',
//         url: backendURL + route,
//         data: JSON.stringify(body),
//         headers: {
//             "Content-Type": "application/json"
//         },
//     });
//     const formattedResponse = await response.json();
//     console.log(formattedResponse);
//     return formattedResponse;
// }

//using fetch
export const makeUnauthenticatedPOSTRequest = async (route, body) => {
    const response = await fetch(backendURL + route, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        },
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}

export const makeAuthenticatedPOSTRequest = async (route, body) => {

    const token = getToken();
    const response = await fetch(backendURL + route, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}
export const makeAuthenticatedGETRequest = async (route) => {

    const token = getToken();
    const response = await fetch(backendURL + route, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}

//token needs to be taken out from the window cookies
const getToken = () => {
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
};
//This file is used to create a configurable and reusable api client for the rest of the code

import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    //optionally you can add a headers argument to set the HTTP headers for each of your requests. often done with things such as API keys
    // headers: {
    //     api-key: 'abd....'
    // }
})

export {CanceledError};
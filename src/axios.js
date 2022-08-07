import { render } from "@testing-library/react";
import axios from "axios";
import React from "react";

class Axios extends React.Component {

    // async getUser() {
    //     let data = []
    //     try {
    //         const response = await axios.get(`${api}/books`, { headers });
    //         //console.log(response.data.books);
    //         data = response.data.books

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    AllBooks() {
        let api = "https://reactnd-books-api.udacity.com"

        let headers = {
            'Accept': 'application/json',
            'Authorization': 'arashi'
        }
        let arr = []
        axios.get(`${api}/books`, { headers })
            .then(function (response) {
                console.log(response.data)
                arr = response.data
            })
    }

    render() {
        return <>
            <h3>
                {this.arr}
            </h3>
        </>
    }

}


//export { getUser }
//export { AllBooks }
export {Axios}
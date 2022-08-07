import React from "react"
import { Link } from "react-router-dom"
import './index.css';

import { getAll } from "./axios";
import { getUser } from "./axios";
import { AllBooks } from "./axios";

class Home extends React.Component {
    // componentDidMount() {
    //     let data = getUser()
    //     console.log(data.length)
    //     for (let index = 0; index < data.length; index++) {
    //         console.log(data[index])
            
    //     }
    // }
    componentDidMount() {
        // let content = getUser()
        // console.log(content)
        //let vals = AllBooks()
        //console.log(vals.length)
        
    }

    render() {
        return <>
            <h3>Home Page</h3>
            {/* {this.vals} */}
        </>
    }
}

export { Home }
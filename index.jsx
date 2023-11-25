// const page = (
//     <div>
        // <h1>Fun facts about React</h1>
        // <ul>
        //     <li>Was first released in 2013</li>
        // </ul>
//     </div>
// )

// react component

// function TemporaryName() {
//     return (
//         <div>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//         </ul>
//         </div>
//     )
// }

// function Page() {
//     return (
//         <ol>I want to know react!!</ol>
//     )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(page)

// ReactDOM.createRoot(document.getElementById('root')).render(TemporaryName)

// ReactDOM.render(<Page />, document.getElementById("root")) - old version

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function Page() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

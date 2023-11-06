import React from "react"
import ReactDOM from "react-dom"

const page = (
    <div>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
        </ul>
    </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(page)

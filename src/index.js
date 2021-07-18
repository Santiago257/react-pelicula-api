import React, { Fragment } from 'react'
import ReactDOM from "react-dom"

import List from "./containers/List"

//Importamos bootswatch
import 'bootswatch/dist/lux/bootstrap.min.css';

const App = () => {
    return (
        //Vamos a crear una navegacion 
        <Fragment>
            <nav className="navbar navbar-dark bg-dark border-bottom border-white">
                <a href="/" className="navbar-brand" >
                    Buscador de peliculas y series
                </a>
            </nav>
            <main className="bg-dark">
                <div className="container">
                    <List/>
                </div>
            </main>
        </Fragment>


        

    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
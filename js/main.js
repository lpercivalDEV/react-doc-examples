//Project Name: React Documentation Sample Codes
//Client Name: Me, myself, and I
//Author: Lilly Percival
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
// Reaction documentation link:   http://www.react.express
//
//
//
//
//
//
//
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///


//Example code 1: Hello World
import React {component } from 'react'
import ReactDom from 'react-dom'

const styles ={
    app: {
        paddingTop: 40,
        textAlign: 'center',
    },
}

class App extends Component {
    render(){
        return(
            <div style={styles.app}>
                Welcome to React!
            </div>
        )
    }
}

const root = document.querySelector('#app')
ReactDom.render(<App />, root)

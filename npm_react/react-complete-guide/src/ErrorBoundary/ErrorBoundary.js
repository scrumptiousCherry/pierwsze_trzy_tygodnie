import React, {Component} from 'react'
class Errorrr extends Component{
    state = {
        jestError: false,
        wiadomosc : ''
    }
    componentDidCatch = (error, info) => {
        this.setState({
            jestError: true, wiadomosc: error
        })
    } 
    render(){
        if(this.state.jestError){
            return <h1>{this.state.wiadomosc}</h1>
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
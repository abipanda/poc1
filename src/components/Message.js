import React, { Component } from 'react'

class Message extends Component{
    constructor() {
        super();
        this.state={
            message: 'Welcome Visitor'
        };
    }
    
    changeMessage=()=>{
        this.setState({
            message: 'Thank you'
        })
    }
    render () {
        const {message}=this.props
        return (
            <div>
            <h1>
                {message}
            </h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
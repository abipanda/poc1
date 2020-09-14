import React, { Component } from 'react'

class HoverCountTwo extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <h1 onMouseOver={incrementCount}>
                Hoverted {count} times
            </h1>
        )
    }
}

export default HoverCountTwo

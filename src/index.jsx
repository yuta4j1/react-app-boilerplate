import React from 'react'
import {render} from 'react-dom'

class InputText extends React.Component {
    constructor(props) {
        super(props)
        this.content = props
    }
    render() {
        return (
            <div>
                <input type="text" id="taskText" value={this.content} />
            </div>
        )
    }
}

class AddButton extends React.Component {
    constructor() {
        this.label = 'Add'
    }
    render() {
        return (
            <div>
                <button className="aButton">{ this.label }</button>
            </div>
        )
    }
}
class Parent extends React.Component {
    greeting() {
        return 'Hello, World!'
    }
    getAnyWord(word) {
        return (
            <h1>{ word }</h1>
        )
    }
    render() {
        return (
            <div>
                <div>{this.getAnyWord(greeting())}</div>
                <div className="float-box">
                    <InputText />
                    <AddButton />
                </div>
            </div>
        )
    }
}

render(
    <Parent />, 
    document.getElementById('app')
)
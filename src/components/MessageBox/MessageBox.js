// Messagebox.js
import React, { Component } from 'react';
import trim from 'trim'


class MessageBox extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: ''
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onKeyupHandler = this.onKeyupHandler.bind(this)

    }

    onChangeHandler(e){
        this.setState({
            message: e.target.value
        })
    }

    onKeyupHandler(e){
        if(e.keyCode === 13 && trim(e.target.value) !== ''){
            e.preventDefault()

            let dbCon = this.props.db.database().ref('/messages')
            dbCon.push({
                message: trim(e.target.value)
            })

            this.setState({
                message: ''
            })
        }
    }

    onSubmitHandler(e){
        e.preventDefault()
        let dbCon = this.props.db.database().ref('/messages')

        dbCon.push({
            message: trim(this.state.message)
        })

        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <form>
                <textarea
                    className="textarea"
                    placeholder="Type a message"
                    cols="100"
                    onChange={this.onChangeHandler}
                    onKeyUp={this.onKeyupHandler}
                    value={this.state.message}
                >
                </textarea>
                <input onClick={this.onSubmitHandler} type="submit" />
            </form>
        );
    }
}

export default MessageBox;
// MessageList.js
import React, { Component } from 'react';
import Message from '../Message/Message';

class MessageList extends Component {

    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
    }


    componentWillMount(){
        let app = this.props.db.database().ref('messages')

        app.on("value", snapshot => {
            let items = []
            snapshot.forEach(item => {
                items.push(item.val())
            });

            this.setState({
                messages:items
            })
        })
    }

    render() {

        let messageNodes = this.state.messages.map((message, index) => {
            return (
                <div key={index} className="card">
                    <div className="card-content">
                        <Message
                            message={message.message}
                        />
                    </div>
                </div>
            )
        });


        return (
            <div>
                { messageNodes }
            </div>
        );
    }
}

export default MessageList;
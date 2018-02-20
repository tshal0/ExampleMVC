import {
    setName,
    newMessage
} from '_redux/actions';

import {connect} from 'react-redux';

class Send extends React.Component {
    send() {
        console.log("SEND_COMPONENT");
        this.props.newMessage({
            name: this.props.name || "",
            text: this.refs.msg.value
        });

        this.refs.msg.value = "";
    }

    render() {
        console.log("render");
        return (
            <div className="Send">
                <input type="text" ref="msg" />
                <button type="button"
                    onClick={() => this.send()}
                >
                    Send
                </button>
            </div>
        );
    }
};

const mapState = state => {
    return { 
        name: state.name
    };
};

const mapDispatch = dispatch =>{
    console.log("mapDispatch (SEND)");
    return {
        newMessage: msg => dispatch(newMessage(msg))
     };
};

export default connect(mapState, mapDispatch)(Send);
import {connect} from 'react-redux';

class History extends React.Component {
    render() {
        return (
            <div className="History">
                {this.props.messages.map((msg, i) => {
                    return (
                        <div key={i}
                            className="message"
                        >
                            <span
                                style={{
                                    fontWeight: "bold"
                                }}
                            >
                                {msg.name}: 
                            </span>
                            <span>
                                {msg.text}
                            </span>
                        </div>
                    );
                })}
            </div>
        );
    }
};

const mapState = state => {
    return {
        messages: state.messages
    };
};

const mapDispatch = dispatch =>{
    return { };
};

export default connect(mapState, mapDispatch)(History);
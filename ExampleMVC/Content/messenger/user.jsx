import {connect} from 'react-redux';

import {
    setName
} from '_redux/actions';

class User extends React.Component{
    componentDidMount() {
        this.rename();
    }

    rename() {
        this.props.setName(prompt('Your Name'));
    }

    render(){
        return (
            <div className="User">
                <h2 style={{display: "inline-block"}}>
                    {this.props.name}
                </h2>
                <a onClick={() => this.rename()} style={{
                    cursor: "pointer",
                    color: "blue",
                    display: "inline-block",
                    marginLeft: "10px"
                }}>
                    Rename
                </a>
            </div>
        )
    }
}

const mapState = state => {
    return {
        name: state.name
    }
}

const mapDispatch = dispatch => {
    return {
        setName: name => dispatch(setName(name))
    }
}

export default connect(mapState, mapDispatch)(User);
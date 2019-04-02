import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        users: state.Users
    }
}


class Nav extends Component {
    render(){
        const users = this.props.users
        return (
            <div className="Navbar">
                <Link to ='/'>Home</Link>
                <Link to ='/users'>Users({users.length})</Link>
                <Link to = '/users/create'>Create A User</Link>
                <a>Top Rank(name)</a>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Nav);
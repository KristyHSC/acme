import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchUsers } from './store'


const mapStateToProps = (state) => {
    return {
        users: state.Users
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: ()=> dispatch(fetchUsers())
    }
}

class Users extends Component {
    componentDidMount(){
        this.props.fetchUsers()
    }

    render (){
        const users = this.props.users
        return (
            <div>
                {users.map(user => 
                    <li key={user.id}>
                    <ul>Name: {user.name}</ul>
                    <ul>Bio: {user.bio}</ul>
                    <ul>Ranked: {user.rank}</ul>
                    </li>)}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
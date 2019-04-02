import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser, postUsers } from './store';

const mapStateToProps = (state) => {
    return {
        users: state.Users,
        newUser: state.newUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (user) => dispatch(addUser(user)),
        post: (user) => dispatch(postUsers(user))
    }
}

class newUser extends Component {
    constructor (){
        super()
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)  
    }

    changeHandler(event){
        const Newuser = {
            name: document.getElementById("name").value,
            bio: document.getElementById("bio").value,
            rank: document.getElementById("rank").value
        }
        this.props.add(Newuser)
        //console.log(this.props.newUser)
    }

    submitHandler(event){
        event.preventDefault()
        const newUser = this.props.newUser
        console.log(newUser)
        this.props.post(newUser)
    }

    render () {
        return (
            <form id='new-user-form' onSubmit={this.submitHandler}>
                <div className ="input-group input-group-lg">
                    <input 
                        className="form-control"
                        type="text"
                        id="name"
                        placeholder="name"
                        onChange={this.changeHandler}
                    />
                    <input 
                        className="form-control"
                        type="text"
                        id="bio"
                        placeholder="bio"
                        onChange={this.changeHandler}
                    />
                    <input 
                        className="form-control"
                        type="integer"
                        id="rank"
                        placeholder="rank"
                        onChange={this.changeHandler}
                    />
                </div>
                <button className="btn btn-default" type="submit">Create!</button>
                <button className="btn btn-default">Cancel!</button>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newUser)
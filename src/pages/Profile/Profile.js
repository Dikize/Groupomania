import React from "react";
import API from '../../Api/userAPI'
import { Redirect } from 'react-router-dom'
import ProfileComponent from '../../components/Profil/Profile'
import UpdateProfileForm from '../../components/Profil/updateProfile'

import './Profile.scss'


class Profile extends React.Component {

    state = {
        user: {},
        redirect: false,
        reqHeader: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }

    componentDidMount() { // (hook) dans cette méthode le composant a été créé et inséré sur le DOM c'est l'endroit idéal pour faire une requête à une API externe.
    
        API.getProfile(this.state.reqHeader)
            .then(user => {
                this.setState({
                    user: user.data
                })
            })
            .catch(err => console.log(err))
    }

    handleDelete = () => {
        API.deleteAccount(this.state.reqHeader)
            .then(() => {
                console.log("Account was deleted")
                localStorage.clear()
                this.setState({redirect: true})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        const {user, redirect} = this.state
        if(!localStorage.getItem('token')){
            return <Redirect to='/' />
        }

        if(redirect){
            return <Redirect to='/' />
        }

        return ( 
            <ProfileComponent
                profilePicture={user.profilePicture}
                lastname={user.lastname} 
                firstname={user.firstname}
                email={user.email}
                biography={user.biography}
                component={<UpdateProfileForm />}
                handleDelete={this.handleDelete}
            />
        )
    }
}
export default Profile;

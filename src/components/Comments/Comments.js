import React, { Component, Fragment } from 'react'
import commentAPI from '../../Api/commentAPI'
import Comment from './Comment'

class Comments extends Component {
    state = {
        isAdmin: false,
        allComment: {},
        reqHeader: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }

    componentDidMount () { // keyword (hook) dans cette méthode le composant a été créé et inséré sur le DOM c'est l'endroit idéal pour faire une requête à une API externe.
        const id = this.props.articleId
        commentAPI.getComments(id, this.state.reqHeader)
        .then(comments => {
            this.setState({allComment: comments.data.comments, isAdmin: comments.data.isAdmin })
        })
        .catch(err => console.log(err))
    }

    handleDeleteComment = (articleId, commentId) => {
        commentAPI.deleteComments(articleId, commentId, this.state.reqHeader)
        .then(res => {
            let allComment = [...this.state.allComment]
            let comment = allComment.find(comment => comment.id === commentId)
            var removeIndex = allComment.map(function(item) { return item.id; }).indexOf(comment.id);
            allComment.splice(removeIndex, 1);
            this.setState({allComment})
        })
        .catch(err => console.log(err))
    }

    render () {

        let {allComment} = this.state
        const listeComment = Object.keys(allComment)
        .map(id => (
            <Comment
                key={allComment[id].id} 
                profilePicture={allComment[id].User.profilePicture}
                name={allComment[id].User.firstname + ' ' + allComment[id].User.lastname}
                comment={allComment[id].commentText}
                handleDeleteComment={() => {this.handleDeleteComment(allComment[id].ArticleId,allComment[id].id)}}
                creator={allComment[id].UserId}
                isAdmin={this.state.isAdmin}
            />
        ))

        return (
            <Fragment>
                <div className="show-comment p-2 mb-2">
                    {listeComment}
                </div>
            </Fragment>
        )
    }
}

export default Comments
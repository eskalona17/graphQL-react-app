import React from "react";
// import gql from "apollo-boost";

// const CREATE_MESSAGE = gql`

//         mutation CreateMessage(
//             $title: String!,
//             $content: String!
//             $author: String!,
//         ) {
//             CreateMessage(
//                 title: $title,
//                 content: $content,
//                 author: $author
//             ) {
                
//             }
//         }
// `;

const MessageForm = () => {
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <input type="text" placeholder="Author" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="type a title" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <textarea rows="2" className="form-control">
                                </textarea>
                            </div>
                            <button className="btn btn-primary btn-success btn-block">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageForm;

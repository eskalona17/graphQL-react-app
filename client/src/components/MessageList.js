import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MESSAGES = gql`
  {
    messages {
      _id
      title
      content
      author
    }
  }
`;

const MessageList = () => {
  const { loading, error, data } = useQuery(GET_MESSAGES);
  if (loading) return <p>Loading Messages...</p>;
  if (error) {
    return <p>Error</p>;
  }

  console.log(data);
  return <div className="col-md-6 offset-md-3"></div>;
};

export default MessageList;

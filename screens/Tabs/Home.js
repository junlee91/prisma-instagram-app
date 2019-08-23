import React from "react";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import styled from "styled-components";

import Loader from "../../components/Loader";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default () => {
  const { loading, data } = useQuery(FEED_QUERY);
  console.log(loading, data);
  return <View>{loading ? <Loader /> : null}</View>;
};

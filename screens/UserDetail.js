import React, { useState } from "react";
import { ScrollView, RefreshControl } from "react-native";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";

import { USER_FRAGMENT } from "../fragments";
import Loader from "../components/Loader";
import UserProfile from "../components/UserProfile";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

export default ({ navigation }) => {
  const { loading, data, refetch } = useQuery(GET_USER, {
    variables: { username: navigation.getParam("username") }
  });
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await refetch({
        variables: { username: navigation.getParam("username") }
      });
    } catch (e) {
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
      {loading ? (
        <Loader />
      ) : (
        data && data.seeUser && <UserProfile {...data.seeUser} />
      )}
    </ScrollView>
  );
};

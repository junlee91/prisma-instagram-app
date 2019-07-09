import React from "react";
import styled from "styled-components";

import useInput from "../../hooks/useInput";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default () => {
  const emailInput = useInput("");
  return (
    <View>
      <AuthInput
        {...emailInput}
        placeholder="Email"
        keyboardType="email-address"
      />
      <AuthButton onPress={() => null} text="Log In" />
    </View>
  );
};

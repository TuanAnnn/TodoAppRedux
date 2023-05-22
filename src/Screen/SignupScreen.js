import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import CtextInput from "../Component/CtextInput";
import { useNavigation } from "@react-navigation/native";
import { signIn } from "../Redux/userSlice";
import { useDispatch } from "react-redux";

const SignupScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    //   navigation.goBack()
    //   console.log(username);
    //   console.log(password);
    if(username.length==0 || password.length ==0){
        Alert.alert('add user or pass')
        return
    }else {
        dispatch(
            signIn({
                username:username,
                password:password
            })
        )
        Alert.alert('Success')
        navigation.goBack()
    }
  };
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 150 }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sign up</Text>
      <CtextInput
        title="User"
        value={username}
        onChangeText={setUsername}
      ></CtextInput>
      <CtextInput
        title="Password"
        value={password}
        onChangeText={setPassword}
      ></CtextInput>
      <CtextInput title="Submit password"></CtextInput>
      <TouchableOpacity
        onPress={onSubmit}
        style={{
          borderRadius: 12,
          backgroundColor: "#6A5ACD",
          width: 80,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});

import { StyleSheet, Text, TouchableOpacity, View,Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CtextInput from "../Component/CtextInput";
import { useSelector } from "react-redux";

const LoginScreen = () => {
  const navigation = useNavigation();
  const users = useSelector((state) => state.users);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  //   useEffect(()=>{
  //     console.log(users)
  //   },[])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>LOGIN</Text>
      <CtextInput title="User" onChangeText={setUser} value={user}></CtextInput>
      <CtextInput
        title="Password"
        onChangeText={setPass}
        value={pass}
      ></CtextInput>
      <TouchableOpacity
        onPress={() => {
          //   navigation.navigate("Home");
        //   console.log(users);
        //   console.log(user,pass)
        const finduser = users.find((users)=>{return users.username == user && users.password == pass })
        if (finduser){
            navigation.navigate('Home')
        }else{
            Alert.alert('sai ten dang nhap hoac mat khau')
        }
        }}
        style={{
          borderRadius: 12,
          backgroundColor: "#6A5ACD",
          width: 80,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignupScreen");
        }}
        style={{
          borderRadius: 12,
          backgroundColor: "#6A5ACD",
          width: 80,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/taskSlice";

const Addtodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const onSumbitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert("add task please ...");
      setTodo('')
      console.log('empty')
      return
    }else{
      dispatch(
        addTask({
          task:todo,
        })
      );
      setTodo('')
    }
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          width: 280,
          height: 45,
          borderRadius: 12,
          marginTop: 12,
          justifyContent: "center",
          paddingHorizontal: 10,
          borderWidth: 1,
        }}
      >
        <TextInput
          onChangeText={setTodo}
          value={todo}
          autoCapitalize="none"
          placeholder="Add to do .."
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={onSumbitTask}
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginStart: 10,
          backgroundColor: "blue",
          height: 45,
          marginTop: 12,
          borderRadius: 12,
          width: 55,
        }}
      >
        <Text style={{ color: "white" }}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Addtodo;

const styles = StyleSheet.create({});

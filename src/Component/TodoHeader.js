import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Addtodo from "./Addtodo";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../Redux/taskSlice";


const data = [
  {
    id: 1,
    title: "Wash dishes",
  },
  {
    id: 2,
    title: "Fix Car",
  },
];

const TodoHeader = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state)=>state.tasks)
  const onDelete = (id) => {
    dispatch(
      deleteTask({
        id:id,
      })
    )
  };
  const renderItems = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 12,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          width: 300,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
        <TouchableOpacity onPress={()=>onDelete(item.id)}>
          <Ionicons name="trash" size={24} color="black"></Ionicons>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>TO DO LIST</Text>
      <FlatList
        renderItem={renderItems}
        data={todos}
        style={{ marginTop: 32 }}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <View style={{ position: "absolute", top: 500 }}>
        <Addtodo></Addtodo>
      </View>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({});

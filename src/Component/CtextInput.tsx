import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface Props {
  title: string;
  onChangeText: () => void;
  value: any;
}

const CtextInput = (props: Props) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={{ marginBottom: 10, marginStart: 5 }}>
        <Text>{props.title}</Text>
      </View>
      <TextInput
        onChangeText={props.onChangeText}
        value={props.value}
        style={{
          width: 300,
          height: 50,
          borderRadius: 12,
          borderWidth: 1,
          paddingHorizontal: 10,
        }}
      ></TextInput>
    </View>
  );
};

export default CtextInput;

const styles = StyleSheet.create({});

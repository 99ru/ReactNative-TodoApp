import React, { useState } from "react";
import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from"react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const submitTask = () => {
    setTaskItems([...taskItems, task]); 
    setTask(null);
  };

  const deleteTask = (index) => {
    const itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy); 
  };

  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.tasksWrapper}>
          <Text style={styles.HeaderText}>Today's tasks</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                  {/* tasks will be added here */}
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView style={styles.inputWrapper}>
        <TextInput style={styles.input} placeholder={"Sup?"} value={task} onChangeText={(text) => setTask(text)}/>
        <TouchableOpacity onPress={() => submitTask()}>
          <View style={styles.submitButton}> 
          <Text>submit</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    padding: 40,
    textAlign: "center",
    paddingHorizontal: 100,
  },
  HeaderText: {
    fontSize: 30,
    fontWeight: "400",
  },
  items: {
    marginTop: 15,
  },
  inputWrapper: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 2,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 340,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#55BCF6",
  },
});

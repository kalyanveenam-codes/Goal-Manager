import { StatusBar } from "expo-status-bar";
import { Component, useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalIItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [getGoals, setGoals] = useState([]);
  const [isModalVisible, setModalVisibility] = useState(false);

  function GoClickHandler(enteredText) {
    setGoals((curentGoals) => [
      ...curentGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
  }
  function CancelClickHandler() {
    setModalVisibility(false)  
  }
  function removeGoalFromList(id){
  setGoals((goals)=>  goals.filter((goal)=>goal.key !== id))
  }
  function setModalVisibilityState(){
  setModalVisibility(true) 
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.view1}>
      <Button title="Add new Goal" onPress={setModalVisibilityState}></Button>
        <GoalInput onAddGoal={GoClickHandler} isVisible={isModalVisible} onCancelGoal={CancelClickHandler}></GoalInput>
      </View>
      <View style={styles.view2}>
        <FlatList
          data={getGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.key} removeGoal={removeGoalFromList}/>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    borderWidth: 10,
    borderColor: "#F5F9D6",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  view1: {
    flex: 0.2,
    marginBottom: 10,
    alignItems: "stretch",
    width: "90%",
    backgroundColor: "#FFFFFF",
    margin: 10,
    paddingLeft: 1,
    paddingBottom: 30,
    alignItems: "center",
    borderBottomWidth: 1,
  },
  view2: {

    flex: 3,
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#EAF8F7",
  },
});

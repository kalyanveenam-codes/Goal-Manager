import { StatusBar } from "expo-status-bar";
import { Component, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  View,
  Image
} from "react-native";
import GoalItem from "./components/GoalIItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [getGoals, setGoals] = useState([0]);
  const [isModalVisible, setModalVisibility] = useState(false);
const[isGImageDisplayed,setImageDisplay]=useState(true);

  function GoClickHandler(enteredText) {
    setGoals((curentGoals) => [
      ...curentGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
    setModalVisibility(false)
  }
  function CancelClickHandler() {
    setModalVisibility(false)  
  }
  function removeGoalFromList(id){
  setGoals((goals)=>  goals.filter((goal)=>goal.key !== id))
  console.log("goals"+getGoals.length);
  if(getGoals.length==1)
  setImageDisplay(true)
  }

  function setModalVisibilityState(){
  setModalVisibility(true) 
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.view1}>
     <View style={styles.AddGoalBtn}>
    
     <View style={styles.btnAG} ><Button title="Add a Goal" color='black'onPress={setModalVisibilityState}></Button></View>
     <Image style={styles.img} source={require('./assets/goalIcon2.png')}/>
     </View>
     </View>
        <GoalInput onAddGoal={GoClickHandler} isVisible={isModalVisible} onCancelGoal={CancelClickHandler} setDefImage={setImageDisplay}></GoalInput>
      
      <View style={styles.view2}>
      { isGImageDisplayed && <Image style={styles.img2} source={require('./assets/goallist.png')}/>}
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
    borderColor: "#1A1F56",
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1C274F'
  },
  view1: {
    flex: 0.25,
    marginBottom: 10,
    alignItems: "stretch",
    width: "90%",
    backgroundColor: "#FFFFFF",
    margin: 10,
    paddingLeft: 1,
    paddingBottom: 30,
    alignItems: "center",
    borderBottomWidth: 1,
    borderRadius: 20,
    backgroundColor:'#1C274F'
  },
  view2: {

    flex: 3,
    flexDirection: "column",
    width: "100%",
    borderWidth:3,
    borderRadius:5,
    borderColor:'#1C274F',
    backgroundColor:'white'
  },
  AddGoalBtn:{
    flexDirection:'row',
    alignItems:'center',
   marginTop:14,
   backgroundColor:'white',
   borderRadius: 6


  },
  img:{
height:40,
width:45
  },
  img2:{
marginTop: '30%',
    height:'70%',
width:'100%',
backgroundColor:'white'
  },
  btnAG:{
    alignItems:'center'
  }

});

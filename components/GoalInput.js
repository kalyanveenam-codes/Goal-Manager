import {StyleSheet, TextInput,Button, View, Modal,Image} from 'react-native';
import {useState} from 'react';

function GoalInput (props){

    const [getInputText, getInputValue] = useState("");
function getGoalInputHandler(enteredText) {
        getInputValue(enteredText);
      }
function GoClickHandler(){
    props.onAddGoal(getInputText);
    getInputValue('');
}
function CancelClickHandler(){
    props.onCancelGoal();
  
}

return ( 
<Modal visible={props.isVisible} animationType='slide'>
<View style={styles.goalIput}>
<Image source={require('../assets/Goal.png')} style={styles.imgSize} />
<TextInput placeholder="Enter your goals for the Day"
style={styles.view1Text}
onChangeText={getGoalInputHandler}
value={getInputText}
/>
<View style={styles.btn}>
<Button title="GO" onPress={GoClickHandler}></Button>
<Button title="CANCEL" onPress={CancelClickHandler}></Button>
</View>
</View>
</Modal>
)
}
export default GoalInput;
const styles=StyleSheet.create({
    view1Text: {
        width: "90%",
        borderWidth: 2,
        padding: 10,
      },
    goalIput:{
paddingTop:80,
alignItems:'center'
    },
    imgSize:{
    width: 400,
    height : 350
    },
    btn:{
flexDirection:'row',
color:'black'
    }
})

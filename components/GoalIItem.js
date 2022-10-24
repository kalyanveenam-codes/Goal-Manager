
import {Pressable, StyleSheet, Text, View} from 'react-native';
function GoalItem (props){
function deleteItem(){
    props.removeGoal(props.id);
  

}
    return(
        <View>
    <Pressable onPress={deleteItem} android_ripple={{color:'#FFA500'}} style={({pressed})=> pressed && styles.pressstyle}>
   
    <Text style={styles.view2Text}> {props.text}</Text>
   
     </Pressable>
     </View>
    )
}
export default GoalItem;
const styles= StyleSheet.create({

    view2Text: {
        alignItems: "center",
        padding: 5,
        margin: 10,
        backgroundColor: "#D6FB5E",
        borderRadius: 3
      },
    pressstyle:{
        opacity :0.5,
        color:'#FFA500'
    }
    })

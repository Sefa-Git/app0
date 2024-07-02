import { View,TextInput,Button, StyleSheet, Modal,Image } from "react-native";
import { useState } from "react";
function GoalInput(props){

  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }  

  function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
return(
  <Modal visible={props.visible} animationType="slide">
    <View style={styles.imageContainer}>

       <Image source={require('../assets/goal.png')} style={styles.image}/>
    </View>
    
    
    <View style={styles.inputContainer}>
       
       <TextInput
         style={styles.textinput}
         placeholder=' Enter your goal' 
         placeholderTextColor='#FFFFFF'
         onChangeText={goalInputHandler}
         value={enteredGoalText}
         />
         <View style={styles.buttonContainer}>
      
            <View style={styles.button}>
             <Button title='Add Goal' onPress={addGoalHandler} color={"#541593"} />
            </View>
            
            <View style={styles.button} >
             <Button title='Cancel' onPress={props.onCancel} color={"#cd3c9a"}/>      
            </View>
         </View>
    </View>
  </Modal>
);

};

export default GoalInput;


const styles = StyleSheet.create({
    textinput:{
        borderColor:'#cbadd4',
        borderWidth:1,
        width: '90%',
        paddingVertical:10,
        backgroundColor:'#cbadd4',
        borderRadius:3,
      },
      inputContainer: {
        justifyContent: 'start',
        alignItems:'center',        
        flex:1,
        backgroundColor:'#270475'
      },
      buttonContainer:{
        marginTop:10,
        flexDirection:'row',

      },
      button:{
        width:'%40',
        marginHorizontal:8,
      },
      image:{
        width:100,
        height:100,
      },
      imageContainer:{
        backgroundColor:'#270475',
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
      }
})
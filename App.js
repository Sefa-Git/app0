import { StatusBar } from 'expo-status-bar';
import React,{ useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState ([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
    
  }
  function addGoalHandler(){
    setCourseGoals( (currentCourseGoals) =>[
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }
  
  return (
    <View style={styles.container1}>
      <View style={styles.inputContainer}>
       
        <TextInput
          style={styles.textinput}
          placeholder=' this holds the place' 
          onChange={goalInputHandler}/>

        <Button title=' Le"Button' onPress={addGoalHandler} />      
      </View>
        {courseGoals.map((goal) => console.log(courseGoals[0]))}  
    
      <View style={styles.goalContainer}>
        
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dummy: {
    backgroundColor: '#66ccff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    borderWidth:3,
    borderColor:'#00aaff',
    padding:16
  },
  
  container1: {    
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor: '#fff',        
    flex:1,
    
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingBottom:24,
    marginRight:8,
    borderBottomWidth:1,
    borderBottomColor:'gray',
    flex:1,
  },
  textinput:{
    borderColor:'gray',
    backgroundColor:'white',
    borderWidth:1,
    width: '70%',
    marginRight:8,
    padding:8,
  },
  goalContainer:{
    flex:4,
    marginVertical:10,
  },
});

import { StatusBar } from 'expo-status-bar';
import React,{ useState} from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const[modalIsVisible,setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState ([]);
  
  function startAddGoalHandler(){
    setModalVisible(true);
  }
  function endAddGoalHandler(){
    setModalVisible(false);
  }
  function addGoalHandler(enteredGoalText){
    setCourseGoals( (currentCourseGoals) =>[
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  function deleteGoalHandler(id){
  setCourseGoals(currentCourseGoals =>{
    consol.log('works')
    consol.log('works2')
    return currentCourseGoals.filter((goal) => goal.id !== id);
  });
  }  

  return (
    <View style={styles.container1}>
      <Button title='Add New Goal' color="#541593" onPress={startAddGoalHandler}/>
      <GoalInput 
      onAddGoal={addGoalHandler} 
      visible={modalIsVisible} 
      onCancel={endAddGoalHandler}
      />
    
      <View style={styles.goalContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) =>{
            return(
            <GoalItem
               text={itemData.item.text} 
               id={itemData.item.id}
               onDeleteItem={deleteGoalHandler}
            />
            );
          }}
          
          keyExtractor={(item,index) =>{
            return item.id;
          }}
          alwaysBounceVertical={false}/>
          
        
      </View>
      
    </View>
  
  );
}

const styles = StyleSheet.create({
  

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
    paddingTop:60,
    paddingHorizontal:16,
    backgroundColor: '#270475',        
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
  customItem:{
    margin: 5,
    borderRadius: 6,
    padding: 15,
    backgroundColor: 'blue',
    color:'white',
  }
});

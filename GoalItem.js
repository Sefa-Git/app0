import { StyleSheet,View,Text, Pressable } from "react-native";

function GoalItem(props){
    return(
    <View style={styles.ViewStyle}>
        <Pressable         
        onPress={props.onDeleteItem.bind(this,props.id)}
        android_ripple={{color:'#000000'}} 
        >
            <Text style={styles.customItem}>{props.text}</Text>
        </Pressable>     
    </View> 
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    customItem:{
        color:'white',
      },
      ViewStyle:{
        margin: 5,
        borderRadius: 6,
        padding: 15,
        backgroundColor: '#541593',
        
      }  
})
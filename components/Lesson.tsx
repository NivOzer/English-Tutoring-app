import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
  name:String
  time:String
  weekDay:String
}

const Lesson = (props: Props) => {
  return (
    <TouchableOpacity onPress={()=>{
      console.log("lesson pressed")
    }}>
    <View style={styles.container}>
      <Text style={styles.text}>{props.time}</Text>
      <Text style={styles.text}>{props.name}</Text>
      <Text style={styles.text}>{props.weekDay}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Lesson

const styles = StyleSheet.create({
    container:{
      flexDirection:"row",
      backgroundColor:"#F8F8FF",
      width:'50%',
      justifyContent:"space-between",
      padding:"3%",
      margin:"0.5%",
      fontSize:16
    },
    text:{
      fontSize:17,
    }
})
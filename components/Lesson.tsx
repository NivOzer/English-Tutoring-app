import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  name:String
  time:String
}

const Lesson = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>{props.time}</Text>
      <Text>{props.name}</Text>
    </View>
  )
}

export default Lesson

const styles = StyleSheet.create({
    container:{
      flexDirection:"row",
      backgroundColor:"#F8F8FF",
      width:'50%',
      justifyContent:"space-between",
      padding:"3%"
    }
})
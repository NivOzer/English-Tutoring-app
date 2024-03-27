import { StyleSheet, Text, View,TouchableOpacity ,Modal,Linking} from 'react-native'
import React,{useState} from 'react'
import StudentDetails from './StudentDetails'
type Props = {
  name:String
  time:String
  weekDay:String
  phone:String
  parentPhone:String
  material:string[]
}

const Lesson = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
    <View style={styles.container}>
      <Text style={styles.text}>{props.time}</Text>
      <Text style={styles.text}>{props.weekDay}</Text>
      <Text style={styles.text}>{props.name}</Text>
    </View>
    <StudentDetails
        name={props.name}
        time={props.time}
        weekDay={props.weekDay}
        phone={props.phone}
        parentPhone={props.parentPhone}
        material={props.material}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </TouchableOpacity>
  )
}

export default Lesson

const styles = StyleSheet.create({
    container:{
      flexDirection:"row",
      backgroundColor:"#F8F8FF",
      width:'60%',
      justifyContent:"space-between",
      padding:"4%",
      margin:"0.7%",
    },
    text:{
      fontSize:20,
    },

})
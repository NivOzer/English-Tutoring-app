import { StyleSheet, Text, View,TouchableOpacity ,Modal,Linking} from 'react-native'
import React,{useState} from 'react'

type Props = {
  name:String
  time:String
  weekDay:String
  phone:String
  parentPhone:String
}

const Lesson = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const phoneNumber = "+972 "+props.phone;
  const parentPhoneNumber = "+972 "+props.parentPhone;

  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
    <View style={styles.container}>
      <Text style={styles.text}>{props.time}</Text>
      <Text style={styles.text}>{props.weekDay}</Text>
      <Text style={styles.text}>{props.name}</Text>
    </View>
    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>פרטי שיעור:</Text>
            <View style={styles.modalDetailsContainer}>
              <Text style={styles.modalDetails} >שם: {props.name}</Text>
              <Text style={styles.modalDetails}>שעה: {props.time}</Text>
              <Text style={styles.modalDetails}>יום בשבוע: {props.weekDay}</Text>
              <View style={styles.modalDetailsContainer}>
                <Text style={styles.modalDetails}>נייד: </Text>
                <Text style={[styles.modalDetails, styles.modalDetailsText]} onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>{phoneNumber}</Text>
              </View>
              <View style={styles.modalDetailsContainer}>
                <Text style={styles.modalDetails}>נייד הורה: </Text>
                <Text style={[styles.modalDetails, styles.modalDetailsText]} onPress={() => Linking.openURL(`tel:${parentPhoneNumber}`)}>{parentPhoneNumber}</Text>
              </View>
            </View>
            <TouchableOpacity
        style={styles.modalClose}
        onPress={() => setModalVisible(false)}
      >
        <Text style={styles.modalCloseText}>Close</Text>
      </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  )
}

export default Lesson

const styles = StyleSheet.create({
    container:{
      flexDirection:"row",
      backgroundColor:"#F8F8FF",
      width:'55%',
      justifyContent:"space-between",
      padding:"3%",
      margin:"0.5%",
      fontSize:16
    },
    text:{
      fontSize:16,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      
    },
    modalContent: {
      justifyContent:'space-evenly',
      alignItems:'center',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
      width:'75%',
      height:'50%'
    },
    modalDetailsContainer:{
      alignItems:"flex-end"
    },
    modalDetails:{
      fontSize:20,
    },
    modalTitle:{
      fontSize:30
    },
    modalDetailsText:{
      color:'#0088CC',
      fontSize:20,
    },
    modalClose:{
      backgroundColor:"#db4c64",
      alignItems:'center',
      justifyContent:"center",
      width:'60%',
      borderRadius:20,
    },
    modalCloseText:{
      fontSize:20,
      color:'white',
      padding:'10%',
    }
})
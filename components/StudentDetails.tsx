import { StyleSheet, Text, View ,Modal,TouchableOpacity,Linking} from 'react-native'
import React,{useState} from 'react'

type Props = {
    name: String;
    time: String;
    weekDay: String;
    phone: String;
    parentPhone: String;
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
  };

const StudentDetails = (props: Props) => {
    const { modalVisible, setModalVisible } = props;
    const phoneNumber = "+972 " + props.phone;
    const parentPhoneNumber = "+972 " + props.parentPhone;
  return (
    <View>
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
    </View>
  )
}

export default StudentDetails

const styles = StyleSheet.create({
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
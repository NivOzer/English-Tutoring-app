import { StyleSheet, Text, View ,Modal,TouchableOpacity,Linking} from 'react-native'
import React,{useState} from 'react'

type Props = {
    name: String;
    time: String;
    weekDay: String;
    phone: String;
    parentPhone: String;
    material:String[];
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
  };

const StudentDetails = (props: Props) => {
    const { modalVisible, setModalVisible } = props;
    const [showMaterial, setShowMaterial] = useState(false);
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
                <Text style={[styles.modalDetails, styles.modalDetailsText]} onPress={() => Linking.openURL(`tel:${props.phone}`)}>{props.phone}</Text>
              </View>
              <View style={styles.modalDetailsContainer}>
                <Text style={styles.modalDetails}>נייד הורה: </Text>
                <Text style={[styles.modalDetails, styles.modalDetailsText]} onPress={() => Linking.openURL(`tel:${props.parentPhone}`)}>{props.parentPhone}</Text>
              </View>
            </View>


        <TouchableOpacity
        style={styles.materialDetails}
        onPress={() => setShowMaterial(!showMaterial)}
        >
        <Text style={styles.materialDetailsTitle}>חומרים לשיעור</Text>
        </TouchableOpacity>
        {showMaterial && (
            <View>
              {props.material.map((material, index) => (
                <Text key={index}>{material}</Text>
              ))}
            </View>
        )}




      <TouchableOpacity
        style={styles.modalClose}
        onPress={() => {
          setModalVisible(false);
          if (showMaterial) {
            setShowMaterial(!showMaterial);
          }
        }}
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
        borderRadius: 30,
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
      },
    
      materialDetails:{
        backgroundColor:"#979797",
        alignItems:'center',
        justifyContent:"center",
        width:'60%',
        borderRadius:20,
      },
      materialDetailsTitle:{
        fontSize:20,
        color:'white',
        padding:'10%',
      },
})
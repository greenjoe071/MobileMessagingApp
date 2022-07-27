import { StyleSheet } from "react-native"



const styles = StyleSheet.create({
    messagePage: {
  
    },
    
    container: {
      flexDirection: "row",
      padding: 10,
      
    },
    childcontainer: {
      flex: 1,
      justifyContent: 'center',
    },
    time: {
      fontSize: 12,
      color: 'grey'
    },
    row: {
      flexDirection: "row",
      justifyContent: 'space-between',
    },
    username: {
      fontWeight: 'bold',
      fontSize: 18,
  
    },
    image: {
      height: 50,
      width: 50,
      borderRadius: 30,
      marginRight: 10,
    },
    badgeContainer: {
      backgroundColor: '#3872e9',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 49,
      top: 8,
    },
    badgeText: {
      color: 'white',
      fontSize: 12,
  
      
    },
  
  
    text: {
      color: 'grey'
    }
  })

  export default styles;
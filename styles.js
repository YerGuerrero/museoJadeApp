import { StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: 'center',
    },

    btnTour: {
        top: 7,
        width: 125,
        height:150,
        borderRadius: 12,
        paddingRight: 130,
        paddingLeft:15,
    },
      
    titleBtnTour: {
        backgroundColor: '#324D51',
        position: 'absolute',
        width: 125,
        height: 60,
        top: 75,
        borderRadius: 15,
        alignSelf: 'center'
    },
    title: {
        bottom: 8, 
        top: 1, 
        fontWeight: "bold", 
        fontSize: 11,
        color: "#ffffff",
        alignSelf: "center",
        width:115
    },
    image: {
      width: 125, 
      height: 125,
      flex: 1, 
      justifyContent: "center"
     
    },
    imageHome: {
      width:Dimensions.get('window').width, 
      height:Dimensions.get('window').height/5.3,
      flex: 1, 
      justifyContent: "center"
    },
    littletitle:{
        top: 2, 
        fontWeight: "normal", 
        fontSize: 9,
        color: "#ffffff",
        alignSelf: "center"
    },
    logo:{
      alignSelf: "center"
    },

    titleBtnHomeLeft: {
      left:-15,
      backgroundColor: '#401709',
      position: 'absolute',
      width: Dimensions.get('window').width/2,
      height: 60,
      top: 92,
      borderRadius:15,
      alignSelf: 'center',
      justifyContent: "center"
    },
    titleBtnHomeRigth: {
      right:-10,
      backgroundColor: '#401709',
      position: 'absolute',
      width: Dimensions.get('window').width/2,
      height: 60,
      top: 92,
      borderRadius: 15,
      alignSelf: 'center',
      justifyContent: "center"
    },
    titleBtnHome: {
      fontWeight: "bold", 
      fontSize: 14,
      color: "#ffffff",
      alignSelf: "center",
      width:150,
    },
    footer:{
      width: Dimensions.get('window').width,
      height: 120,
      backgroundColor: '#324D51',
      justifyContent: "center",
      marginTop: 459,
      //top:Dimensions.get('window').height-348
    },
    txtfooter:{
      color: "#ffffff",
      height: 27,
      right:30,
      bottom:10,
      alignSelf: "flex-end",
    },
    icons:{
      width: Dimensions.get('window').width,
      height: 80,
      flexDirection:"row",
      justifyContent: "center",
      alignContent: "space-between",
      bottom:-10,

    },
    containerTitleTour:{
      backgroundColor:'#324D51',
      height:85,
      justifyContent: "center",
    },
    txtTittleTour: {
      fontWeight: "bold", 
      fontSize: 18,
      color: "#ffffff",
      alignSelf: "center",
    },
    txtDescriptionTour: {
      fontWeight: "normal", 
      fontSize: 14,
      alignSelf: "center",
      lineHeight:20,
      width:340,
      top:20,
      textAlign: 'justify',
      height:270
    },
    btnLinkTour: {
      alignSelf: "center",
      lineHeight:20,
      width:100,
      top:30,
      height:40,
      borderRadius:15,
      justifyContent: "center",
      backgroundColor:'#324D51',
    },
    txtBtnTour: {
      color: "#ffffff",
      fontWeight: "normal", 
      fontSize: 16,
      alignSelf: "center",
      fontWeight: "bold", 
    },
  });

export default styles;
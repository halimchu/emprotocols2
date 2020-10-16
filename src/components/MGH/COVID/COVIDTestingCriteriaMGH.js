import React from 'react'
import { Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Divider } from 'react-native-elements'
import { generateNavigationOptions } from '../../../../utils/header'

export default class COVIDTestingCriteriaMGH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#02bfdb', '#00c0dc', '#02c1dd'], 'MGH') 
  }

  constructor(props) {
    super(props)
    this.state = { 
      buttonHidden: true
    }
  }

  onPressButtonHidden = () => {
    this.setState({ buttonHidden: !this.state.buttonHidden})
  }

  showInfo = () => {
    return (
      <View style={{backgroundColor: '#f0f0f0', paddingBottom: Dimensions.get('window').height/100, }}>
        <Text style={styles.homelessnessText}>Dispo of undomiciled patients to Boston Hope or Barbara McInnis House (BHCH) is determined by case management. If patient is not being admitted or discharged, please contact case management.</Text>
          
        </View>
    ) 
  }

  render() { 
    return (  
        <SafeAreaView style={styles.container}>
          <View style={styles.top}>
            <View style={{alignItems: 'center', marginBottom: Dimensions.get('window').height/100, }}>
              <Text style={styles.title}>
                <Text style={{color: 'red'}}>COVID-19 </Text>
                <Text>Testing Criteria</Text>
              </Text>
            </View>
              <Divider />
          </View>

  
  
          <View style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{ marginLeft: Dimensions.get('window').width/13, }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/riubb9c7f703iu6/TestingMGH.pdf?dl=0')}} >
                            <Text style={styles.customBtnTextFirstLine}>COVID Testing</Text>
                            <Text style={styles.customBtnTextSecondLine}>Algorithm</Text>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => {Linking.openURL('https://www.dropbox.com/s/62ysmn0rpnak9gt/COVIDOrderTipsheet_MGH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>COVID Order</Text>
                            <Text style={styles.customBtnTextSecondLine}>Tip Sheet</Text>
                          </TouchableOpacity>  
                </View>
       

            </View>





                
                

        </SafeAreaView>
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white'
  },
  top: {
    height: '10%',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  
  title: {
    fontWeight: 'bold',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').height/35, 
  },
  button: {
    marginTop: Dimensions.get('window').height/100
  },
  customBtnTextSingleLinePager: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/35,
  },
  customBtnTextSingleLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/19,
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnTextFirstLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/24,
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnTextSecondLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    backgroundColor: "#e8e8e8",
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/7.36,
    borderRadius: 5
  },
  homelessnessText: {
    marginLeft: Dimensions.get('window').width/13,
    marginRight: Dimensions.get('window').width/13,
    fontSize: Dimensions.get('window').height/47,
  },
})
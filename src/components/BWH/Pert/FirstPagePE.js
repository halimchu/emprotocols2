import React from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import { generateNavigationOptions } from '../../../../utils/header'

export default class FirstPagePE extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH', 'arrow-back-ios') 
  }
  
  state = {
    data: [
      'Sustained hypotension (systolic blood pressure <90 mmHg for ≥15 min or requiring vasopressor support)',
      'Not due to a cause other than PE (arrhythmia, hypovolemia, sepsis, or left ventricular dysfunction)',
      'Pulselessness (cardiac arrest)',
      'Persistent profound bradycardia, syncope, or respiratory failure'
    ]
  }



  list() {
    return (
      this.state.data.map((item) => (
        <View key={item} style={{ 
          flexDirection: 'row', 
          marginBottom: Dimensions.get('window').height/50, 
          marginLeft: Dimensions.get('window').width/17,
          marginRight: Dimensions.get('window').width/20,
        }}>
            <Text style={styles.bulletPoint}>{`\u2022`} </Text>  
            <Text style={{flex: 1, flexWrap: 'wrap'}}>
            <Text style={{ fontSize: Dimensions.get('window').height/38 }}> 
              {item}
            </Text>
          </Text>   
        </View>
      ))
    )
  }




  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.titleFirstLine}>Pulmonary Embolism</Text>
          <View style={{marginTop: Dimensions.get('window').height/64}}>
            <Divider />
          </View>


          <View>
            <View style={{
              marginLeft: Dimensions.get('window').width/60, 
              marginRight: Dimensions.get('window').width/60,
              marginBottom: Dimensions.get('window').width/15,
              marginTop: Dimensions.get('window').width/10}}>
              <Text style={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginRight: Dimensions.get('window').width/30, 
                marginLeft: Dimensions.get('window').width/30, 
                fontSize: Dimensions.get('window').height/35 }}>Massive PE?</Text>
            </View>
              {this.list()}
          </View>
        </View>







         
        

          <View style={styles.bottom}>
                    <View style={{flexDirection: 'row', }}>
                      <View style={{ marginRight: Dimensions.get('window').width/15}}>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('SecondPageYesPEBWH')}>
                          <Text style={styles.customBtnText}>Yes</Text>
                        </TouchableOpacity>
                      </View>
                    
                      <View>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('SecondPageNoPEBWH')}>
                          <Text style={styles.customBtnText}>No</Text>
                        </TouchableOpacity>  
                      </View>
                    </View>
          </View>
         
   
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  top: {
    height: '85%',
    // backgroundColor: 'yellow'
  },
  bottom: {
    height: '15%',
    alignItems: 'center',
    // paddingTop: Dimensions.get('window').height/40,
    justifyContent: 'center',
    // backgroundColor: 'gray'
  },

  titleFirstLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/35,
  },
  titleSecondLine: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginBottom: Dimensions.get('window').height/30,
    fontSize: Dimensions.get('window').height/35,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  header: {
    fontWeight: '500',
    color: '#515254',
    fontSize: Dimensions.get('window').height/34,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/35,
    marginLeft: Dimensions.get('window').width/100,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/10,
    marginRight: Dimensions.get('window').width/8,
  },

  customBtnText: {
    fontWeight: '600',
    color: '#2b2b2b',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/35,
  },
  customBtnBG: {
    backgroundColor: '#ededed',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    width: Dimensions.get('window').width/2.5,
    height: Dimensions.get('window').height/11,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset : { width: 1, height: 1},
  },
})
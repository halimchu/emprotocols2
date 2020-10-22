import React from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import { generateNavigationOptions } from '../../../../utils/header'

export default class SecondPageNoPEBWH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH', 'arrow-back-ios') 
  }
  
  state = {
    data: [
      'Acute PE with normotensive status',
      'Objective evidence of right ventricular (RV) dysfunction by transthoracic echocardiography (TTE) or RV enlargement by CT angiography (>0.9:1 RV to LV ratio)',
      'Increased levels in biomarkers of myocardial injury (e.g. troponin T)'
    ]
  }


  secondFn() {
    return (
      this.state.data.map((item) => (
        <View key={item} style={{ 
          flexDirection: 'row', 
          marginBottom: Dimensions.get('window').height/40, 
          marginLeft: Dimensions.get('window').width/17,
          marginRight: Dimensions.get('window').width/10,
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
          <Text style={styles.title}>Pulmonary Embolism</Text>
          <View style={{marginTop: Dimensions.get('window').height/64}}>
            <Divider />
          </View>


          <View style={{
            marginLeft: Dimensions.get('window').width/60, 
            marginRight: Dimensions.get('window').width/60, 
            marginBottom: Dimensions.get('window').width/15,
            marginTop: Dimensions.get('window').width/20
          }}>
            <Text style={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginRight: Dimensions.get('window').width/30, 
              marginLeft: Dimensions.get('window').width/30, 
              fontSize: Dimensions.get('window').height/35 }}>Submassive PE?</Text>
          </View>

          {this.secondFn()}
      </View>

       
        


          <View style={styles.bottom}>
            <View style={{flexDirection: 'row', }}>
              <View style={{ marginRight: Dimensions.get('window').width/15}}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('ThirdPageYESPEBWH')}>
                  <Text style={styles.customBtnText}>Yes</Text>
                </TouchableOpacity>
              </View>

                
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('ThirdPageNoPEBWH')}>
                <Text style={styles.customBtnText}>No</Text>
              </TouchableOpacity>
            </View>
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  firstCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    backgroundColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/25,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  thirdCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
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
    justifyContent: 'center',
    // paddingTop: Dimensions.get('window').height/40,
    // paddingTop: Dimensions.get('window').height/10,
    // backgroundColor: 'gray',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/35,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/35,
    marginLeft: Dimensions.get('window').width/120,
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
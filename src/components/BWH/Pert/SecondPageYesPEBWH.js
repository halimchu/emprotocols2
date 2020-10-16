import React from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import { generateNavigationOptions } from '../../../../utils/header'

export default class SecondPageYesPEBWH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH') 
  }
  
  state = {
    data: [
      'Central or saddle PE',
      'Abnormal vital signs',
      'Evidence of RH strain via ECHO or CT',
      'Elevated troponin',
      'Large PE with contraindication to systemic anticoagulation'
    ],
    dataTwo: [
      ['Expected callback time:', ' 10 min'],
      ['Will PE Team see patient in ED?', ' YES'],
      ['Where will most patients be admitted?', ' CCU'],

    ]
  }




  render() { 
    return (  
      <SafeAreaView style={styles.container}>

       <View style={styles.top}>
          <Text style={styles.title}>Pulmonary Embolism</Text>
          <View style={{marginTop: Dimensions.get('window').height/64}}>
            <Divider />
          </View>
      </View>


        <View style={{
          marginLeft: Dimensions.get('window').width/15,
          // marginRight: Dimensions.get('window').width/15,
        }}>



          <Text style={{
            fontSize: Dimensions.get('window').height/37, 
            marginTop: Dimensions.get('window').height/60, 
            marginBottom: Dimensions.get('window').height/80, 
          }}>
            ED Attending:
          </Text>


            <View style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.text}>1. </Text>
                  <Text style={styles.text}>
                    Ask business specialist to activate group page "Code PE"
                  </Text>
                  
              </View>
            </View>  

            <View style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.text}>2. </Text>
                  <Text style={styles.text}>
                    Page goes to Cardiovascular Medicine Consult Attending and Fellow
                  </Text>
              </View>
            </View>  


            <View style={{marginTop: Dimensions.get('window').height/80, marginLeft: Dimensions.get('window').width/18, }}>
              <Text style={styles.text }>
                -OR-
              </Text>    
            </View>

            <View style={{ marginTop: Dimensions.get('window').height/60, marginLeft: Dimensions.get('window').width/18, }}>
              <Text style={styles.text}>
                Pulmonary Vascular Consult Attending and Fellow
              </Text>
            </View>

            <View style={{marginTop: Dimensions.get('window').height/80, marginLeft: Dimensions.get('window').width/18, }}>
              <Text style={styles.text }>
                -AND-
              </Text>    
            </View>

            <View style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.text}>3. </Text>
                  <Text style={styles.text}>
                  Cardiac Surgery Fellow
                  </Text>
              </View>
            </View>  


            <View style={{paddingTop: Dimensions.get('window').height/40 }}>
                {this.state.dataTwo.map((item) => (
                    <View key={item} style={ styles.bulletPoints }>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                        <Text style={styles.bulletPointText}>
                          <Text style={{fontWeight: '400'}}>{item[0]}</Text>
                          <Text style={{fontWeight: 'bold'}}>{item[1]}</Text>
                        </Text>
                      </View>
                    </View>        
                ))} 
              </View>



          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: Dimensions.get('window').height/38, 
  },
  circleFilledIn: {
    width: 12,
    height: 12,
    borderRadius: 100/2,
    backgroundColor: '#69c8a1'
  },
  circleNotFilledIn: {
    width: 12,
    height: 12,
    borderRadius: 100/2,
    borderWidth: 1,
    borderColor: '#69c8a1'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  
  middle: {
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },

  title: {
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
    fontSize: Dimensions.get('window').height/38,
    marginLeft: Dimensions.get('window').width/100,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/150,
    marginRight: Dimensions.get('window').width/8,
  },
  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    backgroundColor: "#69c8a1",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').height/12,
  },
})
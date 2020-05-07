import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

export default class Pert extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
              <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="white" />
            </View>
          }
          onPress={() => navigation.goBack()}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginLeft: Dimensions.get('window').width/45 }}>
              <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)" />
            </View>
          }
          onPress={() => navigation.goBack()}
          type='clear'
        />
      </View>
    )

    headerTitle = (
      <View>
        <Text style={{ 
          fontSize: Dimensions.get('window').height/43, 
          marginTop: Dimensions.get('window').height/200, 
          color: 'white', fontWeight: 'bold', 
          textAlign: 'center'}}>MGH</Text>
      </View>
    )
      
    let headerRight = (
      <View style={{ flexDirection: 'row' }}>
        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="rgba(0, 0, 0, 0)"  />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />

        <Button 
          icon={
            <View style={{ marginRight: Dimensions.get('window').width/75 }}>
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="white" />
            </View>
          }
          onPress={() => navigation.navigate('Home')}
          type='clear'
        />
      </View>
    )
    
    return {
      headerLeft, 
      headerRight,
      headerTitle,
      headerBackground: (
        <LinearGradient
            colors={['#02bfdb', '#00c0dc', '#02c1dd']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),   
      // headerStyle: {backgroundColor: '#709CD0'},      
    }
  }
  
  state = {
    data: [
      'Central or saddle PE',
      'Abnormal vital signs',
      'Evidence of RH strain via ECHO or CT',
      'Large PE with contraindication to systemic anticoagulation'
    ]
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177247378` }
    else {phoneNumber = `telprompt:6177247378` }
    Linking.openURL(phoneNumber);
  }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <View style={{marginBottom: Dimensions.get('window').height/100}}>
            <Text style={styles.title}>Pulmonary Embolism</Text>
          </View>
          <View style={{alignItems: 'center'}}>
                  <View style={{ flexDirection: 'row'}}>
                     <View style={styles.firstCircle}>
                     </View>
                     <View style={styles.secondCircle}>
                     </View>
                  </View>
            </View>
        </View>


        <View style={styles.middleOne}>
          <View style={{ alignItems: 'center', marginBottom: Dimensions.get('window').height/100, marginTop: Dimensions.get('window').height/200  }}>
            <Text style={styles.header}>Criteria for Large</Text>
            <Text style={styles.header}>Pulmonary Embolus:</Text>

          </View>

          <View style={{paddingTop: Dimensions.get('window').height/100 }}>
            {this.state.data.map((item) => (
                <View key={item} style={ styles.bulletPoints }>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                    <Text style={styles.bulletPointText}>{item}</Text>
                  </View>
                </View>        
            ))} 
          </View>
        </View>







        <View style={styles.middleTwo}>
          <View style={{ alignItems: 'center' }}>
            <View style={{ marginBottom: Dimensions.get('window').height/25, }}>
              <Text style={{fontWeight: '500', fontSize: Dimensions.get('window').width/20,}}>If YES to 1 or more: </Text>
            </View>


          <TouchableOpacity style={styles.shadow} onPress={()=>{this.dialCall()}}>
                    <LinearGradient 
                      style={styles.callButton}
                      colors={['#B62619', '#F63826', '#B62619']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                    >
                        <View style={{ flexDirection: 'row'}}>
                          <View style={{flexDirection: 'column'}}>
                            <View style={{}}>
                              <MaterialIcons name="phone-in-talk" size={Dimensions.get('window').width/10} color="white" />
                            </View>
                          </View>
                          <View style={{flexDirection: 'column',}}>
                            <Text style={{marginLeft: Dimensions.get('window').width/15, fontSize: Dimensions.get('window').width/21, color: 'white', fontWeight: 'bold' }}>Call PERT Consult</Text>
                            <Text style={{ 
                              marginTop: Dimensions.get('window').height/150, 
                              color: 'white', 
                              textAlign: 'center',
                              fontSize: Dimensions.get('window').width/24, fontWeight: '400'
                            }}>x4-7378
                            </Text>
                          </View>
                        </View>
                        
                    </LinearGradient>
              </TouchableOpacity>



            </View> 
        </View>

   

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('PERTNextStepsMGH')}>
            <Text style={styles.customBtnText}>Next Steps</Text>
          </TouchableOpacity>  
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
    marginRight: Dimensions.get('window').width/25,
    marginTop: Dimensions.get('window').height/150,
    backgroundColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  callButton: {
    borderRadius: 40,
    height: Dimensions.get('window').height/11,
    width: Dimensions.get('window').width/1.17,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset : { width: 1, height: 1},
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middleOne: {
    height: '45%',
    paddingTop: Dimensions.get('window').height/120, 
    // backgroundColor: '#eee',
  },
  middleTwo: {
    height: '30%',
    // justifyContent: 'center',
    // alignItems: 'center',
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
    // fontSize: Dimensions.get('window').height/35,
    fontSize: Dimensions.get('window').height/32.5,

  },
  
  header: {
    fontWeight: '600',
    color: '#515254',
    fontSize: Dimensions.get('window').width/18,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPoints: {
    // flexDirection: 'row',
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/10,
    marginRight: Dimensions.get('window').width/10,
  },
  bulletPointText: {
    fontWeight: '300',
    marginLeft: Dimensions.get('window').width/80,
    // fontSize: Dimensions.get('window').height/38,
    fontSize: Dimensions.get('window').width/19,
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
    width: Dimensions.get('window').width/1.2,
    height: Dimensions.get('window').height/11,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset : { width: 1, height: 1},
  },
})
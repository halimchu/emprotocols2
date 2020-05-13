import React from 'react'
import { Linking, Image, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class ECMOOne extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
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
          textAlign: 'center'}}>ACLS</Text>
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
            colors={['#0795C7', '#079BCB', '#069FCB', '#06A5CF', '#0DA9D1', '#0DADD3', '#0EB2D5', '#02B7D9']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),       
    }
  }

  state = {
    data: [
      'CPR <10 mins in duration',
      'BMI <40 (pre-partum BMI if OB patient',
      'Age <70 (Ideal is Age <60)',
      'Presumed Reversible Process',
      'No absolute contraindication to anticoagulation',
      'IF UNSURE, ALWAYS CALL SHOCK TEAM FOR EVALUATION',
    ]
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:8573100335` }
    else {phoneNumber = `telprompt:8573100335` }
    Linking.openURL(phoneNumber);
  }

  show() {
    return (
      this.state.data.map((item) => (
        <View key={item} style={{ 
          flexDirection: 'row', 
          marginBottom: Dimensions.get('window').height/70, 
          marginRight: Dimensions.get('window').width/20, 
          marginLeft: Dimensions.get('window').width/12 
        }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>  
            <Text style={{ marginLeft: Dimensions.get('window').width/60 }}>
            <Text style={{fontSize: Dimensions.get('window').width/20,}}> 
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
            <Text style={styles.title}>ECMO</Text>
            <View style={{paddingTop: Dimensions.get('window').height/80}}>
              <View style={{alignItems: 'center'}}>
                    <View style={{ flexDirection: 'row'}}>
                        <View style={styles.firstCircle}>
                        </View>
                        <View style={styles.secondCircle}>
                        </View>
                    </View>
                </View>
            </View>
        </View>




        <View style={styles.middle}>
          <View style={{paddingBottom: 20}}>
            <Text style={styles.header}>ECMO/ECPR Candidate?</Text>
          </View>
            {this.show()}


            <View style={{alignItems: 'center', paddingTop: 10,}}>
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
                                <Text style={{
                                  marginTop: Dimensions.get('window').height/110,
                                  marginLeft: Dimensions.get('window').width/15, 
                                  fontSize: Dimensions.get('window').width/21, 
                                  color: 'white', 
                                  fontWeight: 'bold' }}>Call ECMO Shock Team</Text>
                              </View>
                            </View>
                            
                        </LinearGradient>
                  </TouchableOpacity>
            </View>





        </View>




        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('ECMOTwo')}>
            <Text style={styles.customBtnText}>Next Steps</Text>
          </TouchableOpacity>  
        </View>
      </SafeAreaView>
    )
  }
}
  
const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset : { width: 1, height: 1},
  },
  callButton: {
    borderRadius: 40,
    height: Dimensions.get('window').height/11,
    width: Dimensions.get('window').width/1.17,
    alignItems: "center",
    justifyContent: "center",
  },
  firstCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    backgroundColor: '#6c9ea1',
    marginRight: Dimensions.get('window').width/25,
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    borderColor: '#6c9ea1',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '75%',
    paddingTop: Dimensions.get('window').height/45,
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray'
  },



  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/38,
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
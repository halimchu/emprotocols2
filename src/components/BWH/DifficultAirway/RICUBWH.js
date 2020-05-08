import React from 'react'
import { ScrollView, Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

export default class RICUBWH extends React.Component {
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
          textAlign: 'center'}}>BWH</Text>
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
            colors={['#146EB5', '#1D74B7', '#277ABB']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),        
    }
  }
  
  state = {
    data: [
      '3 failed endotracheal intubation attempts by experienced providers',
      'After 1 failed intubation attempt when bag-mask ventilation is inadequate',
      'After use of a laryngeal mask airway (LMA) as a rescue device after failed intubation'
    ],
    surgicalAirwayHidden: true
  }

  onPressSurgicalAirwayHidden = () => {
    this.setState({ surgicalAirwayHidden: !this.state.surgicalAirwayHidden})
  }

  goToEnd = () => {
    const added = this.state.imageHeight + this.state.reversibleCausesView + this.state.shockEnergyView
    this.scroller.scrollTo({x: 0, y: added, animated: true});
  }

  show () {
    return (
        this.state.data.map((item) => (
          <View key={item} style={ styles.bulletPoints }>
            <View style={{ flexDirection: 'row'}}>
              <Text style={styles.bulletPoint}>{`\u2022`}</Text>
              <Text style={styles.bulletPointText}>{item}</Text>
            </View>
          </View>        
    )))
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177226555` }
    else {phoneNumber = `telprompt:6177226555` }
    Linking.openURL(phoneNumber);
  }


  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top} >
          <Text style={styles.title}>Anesthesia Airway Team</Text>
          <View style={{paddingTop: Dimensions.get('window').height/80}}>
            <Divider />
          </View>
        </View>
        


        <View style={{ alignItems: 'center', marginTop: Dimensions.get('window').height/40}}>

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
                            <Text style={{marginLeft: Dimensions.get('window').width/15, fontSize: Dimensions.get('window').width/21, color: 'white', fontWeight: 'bold' }}>Call Anesthesia Consult</Text>
                            <Text style={{ 
                              marginTop: Dimensions.get('window').height/150, 
                              color: 'white', 
                              textAlign: 'center',
                              fontSize: Dimensions.get('window').width/24, fontWeight: '400'
                            }}>x2-6555
                            </Text>
                          </View>
                        </View>
                        
                    </LinearGradient>
              </TouchableOpacity>

        </View>




        <View style={{ 
            marginTop: Dimensions.get('window').height/23, 
            marginLeft: Dimensions.get('window').width/37,
            marginRight: Dimensions.get('window').width/37,
            
          }}>
            <Text style={{fontSize: Dimensions.get('window').height/37, textAlign: 'center'}}>  
                    <Text>
                      If anticipate 
                    </Text>
                    <Text style={{fontWeight: 'bold'}}> difficult intubation,</Text>
                    <Text> ask ED business specialist to call the STAT line to activate the Anesthesia Airway Team.</Text>
            </Text>
          </View>



          <View style={{
            marginTop: Dimensions.get('window').height/30, 
            marginLeft: Dimensions.get('window').width/37,
            marginRight: Dimensions.get('window').width/37,
          }}>
            <Text style={{fontSize: Dimensions.get('window').height/37, textAlign: 'center'}}>
                      <Text>
                        If anticipate
                      </Text>
                      <Text style={{fontWeight: 'bold'}}> surgical airway (cricothyrotomy),</Text>
                      <Text> ask ED business specialist to call the STAT line to activate the Surgical Emergency Airway Team.</Text>
            </Text>
          </View>

   

          <View style={{
            marginTop: Dimensions.get('window').height/200,
            alignItems: 'center'}}>
            <TouchableOpacity style={styles.customBtnBG} onPress={() => {
              this.onPressSurgicalAirwayHidden()
            }}>
              <Text style={styles.customBtnText}>Indications for surgical airway</Text>
            </TouchableOpacity>

            <View onLayout={this.measureCheckButtonView}>
              {!this.state.surgicalAirwayHidden ? this.show() : null}
            </View> 
          </View>  
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
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
    height: '10%'
    // backgroundColor: 'yellow'
  },
  middle: {
    alignItems: 'center',
    marginTop: Dimensions.get('window').height/30, 
    // backgroundColor: '#eee',
  },
  middleTwo: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
  bottom: {
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
  divider: {
    backgroundColor: '#CDCDCD', 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },

  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/20,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/41,
    marginLeft: Dimensions.get('window').width/100,
  },
  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/44,
    marginTop: Dimensions.get('window').height/120,
  },
  customBtnBG: {
    borderRadius: 10,
    backgroundColor: "#ededed",
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/22, 
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowOffset : { width: 1, height: 4},
  },
})
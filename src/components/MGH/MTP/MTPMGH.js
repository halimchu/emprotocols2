import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import ComponentTwo from '../../ComponentTwo'
import MTPNeedMoreBlood from './MTPNeedMoreBlood'

export default class MTPMGH extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/29} color="white" />
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
              <Icon name="md-home" size={Dimensions.get('window').height/29} color="white" />
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
            colors={['#008CB1', '#1192BC', ]}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),   
      // headerStyle: {backgroundColor: '#709CD0'},      
    }
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177263333` }
    else {phoneNumber = `telprompt:6177263333` }
    Linking.openURL(phoneNumber);
  }


  onPressNeedBloodHidden = () => {
    this.setState({ needBloodHidden: !this.state.needBloodHidden })
  }


  state = {
    needBloodHidden: true,

    data: [
      'If indicated, order 1g TXA followed by another gram to be given over 8 hours',
      'Give 2 grams of Ca++ up front',
      'Check Ca++, K+, INR, platelets, & fibrinogen levels at regular intervals'
    ]
  }


  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
          <View style={styles.top}>
            <View style={{marginBottom: Dimensions.get('window').height/100}}>
              <Text style={styles.title}>MTP</Text>
            </View>
            <Divider />
          </View>



          <View style={styles.middle}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: Dimensions.get('window').height/35,}}>Emergency Blood Release</Text>
            </View>

            <View style={{paddingLeft: Dimensions.get('window').width/20, paddingRight: Dimensions.get('window').width/30,}}>
                <View style={{marginTop: Dimensions.get('window').height/35}}>
                  <Text style={{fontWeight: '500', fontSize: Dimensions.get('window').height/39}}>Process:</Text>
                  <Text style={{fontWeight: '300', fontSize: Dimensions.get('window').height/39}}>Complete emergency release blood slip and return to coordinator</Text>
                  <View style={{marginTop: Dimensions.get('window').height/35}}>
                    <Text style={{fontWeight: '500', fontSize: Dimensions.get('window').height/39}}>First Pack:</Text>
                    <Text style={{fontWeight: '300', fontSize: Dimensions.get('window').height/39}}>4 units of O whole blood</Text>
                    <Text style={{fontWeight: '300', fontSize: Dimensions.get('window').height/39}}>(4U PRBCs, 4U FFP, 4U Platelets)</Text>
                  </View>
                </View>
            </View>



              <View style={{ marginTop: Dimensions.get('window').height/40 }}>
                      <ComponentTwo 
                        toggle={this.onPressNeedBloodHidden} 
                        hidden = {this.state.needBloodHidden}
                        component={<MTPNeedMoreBlood />}
                        buttonTitle='Need More Blood?'
                      />
              </View>    
          </View>





        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('MTPNextStepsMGH')}>
            <Text style={styles.customBtnText}>Next Steps</Text>
          </TouchableOpacity>  
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '75%',
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
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
    color: '#2b2b2b',
    marginLeft: Dimensions.get('window').width/20,
    fontSize: Dimensions.get('window').height/37,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/37,
  },
  customBtnText: {
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/40,
  },
  customBtnBG: {
    backgroundColor: "#8dabc2",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 15,
    width: Dimensions.get('window').width/1.2,
    height: Dimensions.get('window').height/12,
  },
})
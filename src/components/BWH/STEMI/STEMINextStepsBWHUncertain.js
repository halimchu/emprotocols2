import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import LinearGradient from 'react-native-linear-gradient'

export default class STEMINextStepsBWHUncertain extends React.Component {
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
            colors={['#146EB5', '#1D74B7', '#277ABB']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),        
    }
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177268282` }
    else {phoneNumber = `telprompt:6177268282` }
    Linking.openURL(phoneNumber);
  }

  state = {
    data: [
      'IV access',
      'ASA 325mg',
      'Unfractionated heparin weight adjusted to a max dose of 5000 units bolused IV',
      'Consider 2b/3a inhibitor',
      'Labs including BMP, CBC, PT/PTT, Type & Screen',
      'Place defibrillator pads'
    ]
  }
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>STEMI</Text>
          <View style={{marginTop: Dimensions.get('window').height/64}}>
            <Divider />
          </View>
        </View>


        <View style={styles.middle}>
            <View style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={{ marginLeft: Dimensions.get('window').width/100}}>
                    <Text style={{
                      fontWeight: '300',
                      fontSize: Dimensions.get('window').height/35,}}>Serial VS, supplemental O</Text>
                    <Text style={{
                      fontSize: Dimensions.get('window').height/50, 
                      fontWeight: '500'}}>2
                    </Text>
                  </Text>
              </View>
            </View>    


              



            {this.state.data.map((item) => (
              <View key={item} style={ styles.bulletPoints }>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                    <Text style={styles.bulletPointText}>{item}</Text>
                </View>
              </View>        
            ))}   
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  firstCircle: {
    marginTop: Dimensions.get('window').height/70,
    marginRight: Dimensions.get('window').width/24,
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 100/2,
    borderColor: '#69c8a1',
  },
  secondCircle: {
    marginTop: Dimensions.get('window').height/70,
    marginLeft: Dimensions.get('window').width/24,
    borderRadius: 100/2,
    width: 15,
    height: 15,
    backgroundColor: '#69c8a1'
  },
  container: {
    flex: 1,
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '45%',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height/40,
    // backgroundColor: '#F7F7F7',

  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    paddingTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
    marginTop: Dimensions.get('window').height/64, 
    marginBottom: Dimensions.get('window').height/64, 
    marginLeft: Dimensions.get('window').width/60, 
    marginRight: Dimensions.get('window').width/60, 
    height: Dimensions.get('window').height/600
  },

  bulletPoint: {
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/13,
    marginRight: Dimensions.get('window').width/8,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/36,
    marginLeft: Dimensions.get('window').width/100,
  },
  bulletPointText2: {
    fontWeight: '400',
    marginTop: Dimensions.get('window').height/100,
    fontSize: Dimensions.get('window').height/60,
    marginLeft: Dimensions.get('window').width/100,
  },

  textFirstLine: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/32,
  },
  textSecondLine: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/32,
  },
  textSecondLineBold: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: Dimensions.get('window').height/100,
    fontSize: Dimensions.get('window').height/32,
  },
  textLastTwoLines: {
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: Dimensions.get('window').height/100,
    fontSize: Dimensions.get('window').height/35,
  }
})
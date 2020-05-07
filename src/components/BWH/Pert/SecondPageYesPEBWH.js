import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

export default class SecondPageYesPEBWH extends React.Component {
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
      'Central or saddle PE',
      'Abnormal vital signs',
      'Evidence of RH strain via ECHO or CT',
      'Elevated troponin',
      'Large PE with contraindication to systemic anticoagulation'
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
          marginRight: Dimensions.get('window').width/15,
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
                    Activates Group page "Code Pulmonary Embolism"
                  </Text>
                  
              </View>
            </View>  

            <View style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.text}>2. </Text>
                  <Text style={styles.text}>
                    Goes to Cardiovascular Medicine Consult Attending and Fellow
                  </Text>
              </View>
            </View>  


            <View style={{marginTop: Dimensions.get('window').height/80, marginLeft: Dimensions.get('window').width/18, }}>
              <Text style={styles.text }>
                -or-
              </Text>    
            </View>

            <View style={{ marginTop: Dimensions.get('window').height/60, marginLeft: Dimensions.get('window').width/18, }}>
              <Text style={styles.text}>
                Pulmonary Vascular Consult Attending and Fellow AND Cardiac Surgery Fellow
              </Text>
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
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/35,
    // marginLeft: Dimensions.get('window').width/100,
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
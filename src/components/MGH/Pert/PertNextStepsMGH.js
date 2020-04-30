import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Button, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

export default class PertNextStepsMGH extends React.Component {
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
            colors={['#0c79b6', '#01a8ce']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),    
    }
  }
  
  state = {
    data: [
      'CBC with diff, BMP, LFTs, Lactate, D-dimer, ABG',
      'PT/INR and PTT, Type & Screen',
      'NT-proBNP (or BNP)',
      'Troponin T-hs',
      'EKG',
      'CTA chest PE protocol',
      'US LE duplex (bilateral)',
      'TTE (Page US Tech if daytime hours)'
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
          <View style={{marginBottom: Dimensions.get('window').height/80}}>
            <Text style={styles.titleFirstLine}>Pulmonary Embolism</Text>
            <Text style={styles.titleSecondLine}>Response Team</Text>
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



       
          <View style={styles.middle}>
            <Text style={styles.header}>If not already obtained, please order:</Text>
            {this.state.data.map((item) => (
                <View key={item} style={ styles.bulletPoints }>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                    <Text style={styles.bulletPointText}>{item}</Text>
                  </View>
                </View>        
            ))} 
          </View>




          <View style={styles.bottom}>
            <View>
              <Text style={{color: '#787878',fontSize: Dimensions.get('window').width/22,}}>What is PERT?</Text>
            </View>

            <Text style={{
              color: '#787878',
              fontSize: Dimensions.get('window').width/22,
              marginTop: Dimensions.get('window').height/80, 
              marginLeft: Dimensions.get('window').width/10, 
              marginRight: Dimensions.get('window').width/10,}}>Pulmonary Embolism Response Team, a multidisciplinary team to help 
              provide immediate care, including evalution for OR, Cath Lab, and ECMO
            </Text>
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
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    backgroundColor: '#6c9ea1',
  },
  container: {
    flex: 1
  },
  top: {
    height: '15%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '45%',
    marginLeft: Dimensions.get('window').width/27
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '40%',
    alignItems: 'center', 
    paddingTop: Dimensions.get('window').height/7, 
    // backgroundColor: 'gray',
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
    fontSize: Dimensions.get('window').height/35,
  },
  divider: {
    backgroundColor: '#CDCDCD', 
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
    marginLeft: Dimensions.get('window').width/100,
    // fontSize: Dimensions.get('window').height/40,
    fontSize: Dimensions.get('window').width/20,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/14,
    marginRight: Dimensions.get('window').width/7,
  },
})
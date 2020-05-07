import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

export default class MTPNextStepsMGH extends React.Component {
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
            colors={['#02bfdb', '#00c0dc', '#02c1dd' ]}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),   
    
    }
  }

  state = {
    data: [
      'If indicated, order 1g TXA followed by another gram to be given over 8 hours',
      'Give 2 grams of Ca++ up front',
      'Check Ca++, K+, INR, platelets, & fibrinogen levels at regular intervals'
    ]
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177263333` }
    else {phoneNumber = `telprompt:6177263333` }
    Linking.openURL(phoneNumber);
  }

  state = {
    data: [
      '1. If indicated, order 1g TXA followed by another gram to be given over 8 hours',
      '2. Give 2 grams of Ca++ up front',
      '3. Check Ca++, K+, INR, platelets, & fibrinogen levels at regular intervals'
    ]
  }
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
          <View style={styles.top}>
          <Text style={styles.title}>MTP</Text>
          <View style={{marginTop: Dimensions.get('window').height/64, }}>
            <Divider />
          </View>
        </View>

        <View style={{
          marginLeft: Dimensions.get('window').width/20, 
          marginRight: Dimensions.get('window').width/10,
          marginTop: Dimensions.get('window').height/70, }}>
          <Text style={styles.header}>Remember:</Text>
          <View style={{flexDirection: 'row', marginTop: Dimensions.get('window').height/50}}>
              <Text style={styles.text}>1) </Text>
              <Text style={styles.text}>If indicated, order 1g TXA followed by another gram to be given over 8 hours</Text>
          </View>


          <View style={{
            flexDirection: 'row',
            marginTop: Dimensions.get('window').width/20
          }}>
              <Text style={styles.text}>2) </Text>
              <Text style={styles.text}>Give 2 grams of Ca++ up front</Text>
          </View>


          <View style={{
            flexDirection: 'row',
            marginTop: Dimensions.get('window').width/20
          }}>
              <Text style={styles.text}>3) </Text>
              <Text style={styles.text}>Check Ca++, K+, INR, platelets, & fibrinogen levels at regular intervals</Text>
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
    height: '10%',
    // backgroundColor: 'yellow'
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
    fontWeight: '500',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').height/38,
  },
  text: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/38,
  },
})
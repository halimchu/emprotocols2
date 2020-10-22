import React from 'react'
import { Dimensions, View, Text, StyleSheet, SafeAreaView } from 'react-native'
import {  Divider } from 'react-native-elements'
import { generateNavigationOptions } from '../../../../utils/header'

export default class MTPNextStepsMGH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#02bfdb', '#00c0dc', '#02c1dd'], 'MGH', 'arrow-back-ios') 
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
              <Text style={styles.text}>Check Ca++, K+, INR, platelets, & fibrinogen levels at regular intervals</Text>
          </View>


          <View style={{
            flexDirection: 'row',
            marginTop: Dimensions.get('window').width/20
          }}>
              <Text style={styles.text}>3) </Text>
              <Text style={styles.text}>Consider repleting Ca++ if indicated</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            marginTop: Dimensions.get('window').width/20
          }}>
              <Text style={styles.text}>4) </Text>
              <Text style={styles.text}>One whole blood unit has a volume of approximately 500 mL</Text>
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
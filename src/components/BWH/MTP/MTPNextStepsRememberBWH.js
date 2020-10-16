import React from 'react'
import { Dimensions, View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { generateNavigationOptions } from '../../../../utils/header'

export default class MTPNextStepsRememberBWH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH') 
  }



  render() { 
    return (  
      <SafeAreaView style={styles.container}>
      <View style={styles.top}>
      <Text style={styles.title}>Massive Transfusion Protocol</Text>
      <View style={{marginTop: Dimensions.get('window').height/64, }}>
      <View style={{alignItems: 'center'}}>
                  <View style={{ flexDirection: 'row'}}>
                     <View style={styles.firstCircle}>
                     </View>
                     <View style={styles.secondCircle}>
                     </View>
                     <View style={styles.thirdCircle}>
                     </View>
                  </View>
            </View>
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
  firstCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/25,
    marginRight: Dimensions.get('window').width/25,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  thirdCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    backgroundColor: '#6c9ea1',
  },
  
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  top: {
    height: '15%',
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
    fontWeight: 'bold',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').height/39,
  },
  text: {
    fontSize: Dimensions.get('window').width/20,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/10,
    marginTop: Dimensions.get('window').height/120,
  },

  customBtnText: {
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/40,
  },
  customBtnBG: {
    borderWidth: 4,
    borderColor: '#69c8a1',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 30,
    shadowOpacity: .1,
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/10.75,
  },
})
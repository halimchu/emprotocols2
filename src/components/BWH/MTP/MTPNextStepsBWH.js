import React from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { generateNavigationOptions } from '../../../../utils/header'

export default class MTPNextStepsBWH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH', 'arrow-back-ios') 
  }

  state = {
    dataOne: [
     '6U RBC',
     '6U FFP',
     '1U platelets'
    ],
    dataTwo: [
      '6U RBC',
      '6U FFP',
      '1U platelets'
    ],
    dataThree: [
      'If indicated, order 1g TXA followed by another gram to be given over 8 hours',
      'Give 2 grams of Ca++, K+, INR, platelets, & fibrinogen levels at regular intervals'
    ]
  }



  render() { 
    return (  
      <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.top}>
          <Text style={styles.title}>Massive Transfusion Protocol</Text>
          <View style={{paddingTop: Dimensions.get('window').height/64, }}>
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


        <View style={styles.middle}>
          <Text style={styles.header}>First Round</Text>
          <View>
              {this.state.dataOne.map((item) => (
                <View key={item} style={ styles.bulletPoints }> 
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                    <Text style={styles.bulletPointText}>{item}</Text>
                  </View>
                </View>        
              ))} 
          </View>

            

          <View style={{paddingTop: Dimensions.get('window').height/50,}}>
          <Text>
            <Text style={styles.header}>Second Round </Text>
            <Text style={styles.header2}>(in less than 15 mins)</Text>
          </Text>
            {this.state.dataTwo.map((item) => (
              <View key={item} style={ styles.bulletPoints }> 
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                  <Text style={styles.bulletPointText}>{item}</Text>
                </View>
              </View>        
            ))} 
          </View>


          <View style={{
            // marginLeft: Dimensions.get('window').width/20, 
            marginRight: Dimensions.get('window').width/20, 
            paddingTop: Dimensions.get('window').height/50,
          }}>
            <Text style={styles.text}>After second round, call Blood Bank if more products needed.</Text>
          </View>
        </View>

     
            
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('MTPNextStepsRememberBWH')}>
            <Text style={styles.customBtnText}>Next Steps</Text>
          </TouchableOpacity>   
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
    backgroundColor: '#6c9ea1',
  },
  thirdCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  
  top: {
    height: '15%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '70%',
    paddingLeft: Dimensions.get('window').width/20,
    paddingRight: Dimensions.get('window').width/80,
    // backgroundColor: 'pink',
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
    fontSize: Dimensions.get('window').height/32.5,
  },
  header: {
    fontWeight: 'bold',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').width/20.5,
  },
  header2: {
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').width/20.5,
  },
  text: {
    fontSize: Dimensions.get('window').width/20.5,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width/50,
    marginBottom: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/200,
    fontSize: Dimensions.get('window').width/20.5,
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
import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

export default class StrokeTwo extends React.Component {

  state = {
    data: [
      ['1)', 'ED resident or attending asks business specialist to group page "Stroke Code" (Acute Stroke ED Group 107) if patient is eligible for endovascular therapy'],
      ['2)', 'Order STAT MRI/MRA Head & Neck'],
      ['3)', 'Discuss with Neuro resident plan for endovascular therapy or not'],

    ],
  }


  render() { 
    return (  
      <View>

        <View style={{marginLeft: Dimensions.get('window').width/30, marginRight: Dimensions.get('window').width/25 }}>
          {this.state.data.map((item) => (
            <View key={item} style={ styles.bulletPoints }> 
              <View style={{  flexDirection: 'row'}}>
                <View style={{ flexDirection: 'column'}}>
                  <Text style={styles.bulletPoint}>{item[0]}</Text>
                  <View style={{flexDirection: 'row'}}>
                    </View>
                  </View>
                <Text style={styles.bulletPointText}>{item[1]}</Text>
              </View>
            </View>        
          ))} 
        </View>


{/*         
        <View>
        <View style={{marginRight: Dimensions.get('window').width/20}}>
                {this.state.dataFour.map((item) => (
                  <View key={item} style={ styles.bulletPoints }> 
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.bulletPointText}>{item}</Text>
                    </View>
                  </View>        
                ))} 
              </View>

            </View> */}
      </View>

    )
  }
}

const styles = StyleSheet.create({
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
    // marginLeft: Dimensions.get('window').width/25,
    marginTop: Dimensions.get('window').height/120,
  },
  bulletPoint: {
    // color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/41,
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
  // customBtnText: {
  //   fontWeight: '600',
  //   color: "#fff",
  //   textAlign: 'center',
  //   textAlignVertical: "center",
  //   fontSize: Dimensions.get('window').height/35,
  //   marginTop: Dimensions.get('window').height/47,
  // },
  // customBtnBG: {
  //   backgroundColor: "#69c8a1",
  //   paddingHorizontal: 1,
  //   paddingVertical: 1,
  //   borderRadius: 8,
  //   width: Dimensions.get('window').width/1.13,
  //   height: Dimensions.get('window').height/12,
  // },
})
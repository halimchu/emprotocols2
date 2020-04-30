import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

export default class StrokeOne extends React.Component {

  render() { 
    return (  
      <View style={styles.container}>

        <View style={{marginLeft: Dimensions.get('window').width/30}}>
          
              <View style={{  flexDirection: 'row', marginTop: Dimensions.get('window').height/120 }}>
                <View style={{ flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bulletPoint}>1)</Text>
                    <View style={{marginLeft: Dimensions.get('window').width/70 }}>
                      <Text style={{fontSize: Dimensions.get('window').height/40}}>Go to Paging Directory</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{  flexDirection: 'row', marginTop: Dimensions.get('window').height/120 }}>
                <View style={{ flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bulletPoint}>2)</Text>
                    <View style={{marginLeft: Dimensions.get('window').width/70 }}>
                      <Text style={{fontSize: Dimensions.get('window').height/40}}>Send Group Page</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{  flexDirection: 'row', marginTop: Dimensions.get('window').height/120 }}>
                <View style={{ flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bulletPoint}>3)</Text>
                    <View style={{marginLeft: Dimensions.get('window').width/70 }}>
                      <Text style={{fontSize: Dimensions.get('window').height/40}}>Select "ED2CT {'<'}6 HOURS"</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{  flexDirection: 'row', marginTop: Dimensions.get('window').height/120 }}>
                <View style={{ flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.bulletPoint}>4)</Text>
                    <View style={{marginLeft: Dimensions.get('window').width/70 }}>
                      <Text style={{fontSize: Dimensions.get('window').height/40}}>Order STAT CTA Head & Neck</Text>
                    </View>
                  </View>
                </View>
              </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // marginLeft: Dimensions.get('window').width/10,
  },
  top: {
    height: '10%',
    backgroundColor: 'yellow'
  },
  middle: {
    height: '75%',
    paddingLeft: Dimensions.get('window').width/20,
    backgroundColor: 'pink'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'gray',
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
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    // marginLeft: Dimensions.get('window').height/120,
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
})
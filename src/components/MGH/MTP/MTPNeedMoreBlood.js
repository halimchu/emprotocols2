import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 

export default class MTPNeedMoreBlood extends React.Component {

  render() { 
    return (  
      <View style={styles.container}>
        <View style={{
          paddingLeft: Dimensions.get('window').width/20,
          paddingRight: Dimensions.get('window').width/20,
        }}>

          <View style>
            <Text style={{fontSize: Dimensions.get('window').height/40 }}>
          
              <Text>
                  After the first trauma pack, you must pick up the
                  <Text> </Text>
                  <MaterialIcons name="phone" size={20} color="red" /> 
                    <Text style={{fontWeight: 'bold', color: 'red'}}>RED PHONE</Text>
                  <MaterialIcons name="phone" size={20} color="red" /> 
                  <Text> </Text>
                  and individually request how many units
                  of each blood product you want at the intervals you want it, 
                  via paper form or Prepare/Transfuse order in EPIC.
              </Text>
            </Text>
          </View>


        
          <View style={{alignItems: 'center', marginTop: Dimensions.get('window').height/40}}>
            <Text style={{fontSize: Dimensions.get('window').height/40}}>MGH recommends transfusing</Text>
            <Text style={{fontSize: Dimensions.get('window').height/40}}>1:2 (FFP : PRBC) ratio and platelets</Text>
            <Text style={{fontSize: Dimensions.get('window').height/40}}>transfusion per labs.</Text>
          </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#F5F5F5'
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
    color: 'gray',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').height/120,
    fontSize: Dimensions.get('window').height/37,
  },

})
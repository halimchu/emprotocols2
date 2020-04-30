import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import LinearGradient from 'react-native-linear-gradient'

export default class STEMIBWH extends React.Component {
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
            colors={['#0440A7', '#0F82B8']}
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
      'EMS entry notification for STEMI activation (EM attending can decide to activate Code STEMI from the field based on EMS verbal report alone)',
      'Symptoms of cardiac ischemia with onset within 12 hours of ED presentation',
      'New ST segment elevations of at least 1mm in at least two contiguous leads',
      'Alternative diagnoses such as pulmonary embolism or aortic dissection less likely'
    ]
  }
  
  render() { 
    return (  
      <SafeAreaView style={styles.container}>
         <View style={styles.top}>
          <Text style={styles.title}>STEMI</Text>
          <View style={{marginTop: Dimensions.get('window').height/64}}>
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




        <View style={styles.middleOne}>
          <View style={{alignItems: 'center'}}>
            <Text style={{alignItems: 'center', fontSize: Dimensions.get('window').height/34}}>Concern for STEMI?</Text>
          </View>
        </View>


        <View style={styles.middleTwo}>
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
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200, }}>

              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMIYesBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
  
            
           
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
    backgroundColor: '#6c9ea1',
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
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  container: {
    flex: 1,
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middleOne: {
    height: '7%',
    justifyContent: 'center',
    paddingTop: Dimensions.get('window').height/35,
    // backgroundColor: 'pink',
  },
  middleTwo: {
    height: '68%',
    paddingTop: Dimensions.get('window').height/40,
    // backgroundColor: 'green',
  },
  bottom: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    paddingTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
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
    marginLeft: Dimensions.get('window').width/100,
    // fontSize: Dimensions.get('window').width/18.5,
    fontSize: Dimensions.get('window').height/38,

  },

  customBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    backgroundColor: "#8dabc2",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 8,
    width: Dimensions.get('window').width/1.2,
    height: Dimensions.get('window').height/12,
  },
}) 
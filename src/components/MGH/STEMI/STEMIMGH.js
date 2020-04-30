import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class STEMIMGH extends React.Component {
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
            colors={['#0c79b6', '#01a8ce']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),
      // headerStyle: {backgroundColor: '#709CD0'},      
    }
  }

  dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:6177268282` }
    else {phoneNumber = `telprompt:6177268282` }
    Linking.openURL(phoneNumber);
  }

  // state = {
  //   data: [
  //     'Symptoms of cardiac ischemia with onset within 12 hours of ED presentation',
  //     'New ST segment elevations of at least 1mm in at least two contiguous leads',
  //     'Alternative diagnoses such as pulmonary embolism or aortic dissection less likely'
  //   ]
  // }
  

  state = {
    data: [
      'ST depression in at least two leads V1-V4',
      'Multi-lead ST depression with ST elevation in aVR',
      'Left Bundle Branch Block with acute symptoms'
    ]
  }

  state2 = {
    data: [
      '≥1 mm in at least two contiguous leads',
      '≥2 mm (men) or ≥ 1.5 mm (women) in V2-V3' 
    ]
  }

  firstFn() {
    return (
        <View style={{ flexDirection: 'row', marginLeft: Dimensions.get('window').height/40}}>
        <Text style={styles.bulletPoint}>{`\u2022`}</Text>
        <Text>
          <Text style={{ fontSize: Dimensions.get('window').height/40, fontWeight: '500' }}>NEW </Text>
          <Text style={styles.bulletPointText}>ST elevation</Text>
        </Text>
      </View>
    )
  }

  secondFn() {
    return (
      this.state2.data.map((item) => (
        <View key={item} style={{ flexDirection: 'row', marginRight: Dimensions.get('window').width/20, marginLeft: Dimensions.get('window').width/10 }}>
            <Text style={styles.bulletPointSmall}>{`\u2022`}</Text>  
            <Text style={{flex: 1, flexWrap: 'wrap'}}>
            <Text style={{ fontWeight: '300', fontSize: Dimensions.get('window').height/39 }}> 
              {item}
            </Text>
          </Text>   
        </View>
      ))
    )
  }

  thirdFn() {
    return (
      this.state.data.map((item) => (
        <View key={item} style={ styles.bulletPoints }>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
            <Text>
              <Text style={{ 
                fontWeight: '500', 
                fontSize: Dimensions.get('window').height/40, 
              }}>
                NEW
              </Text>
              <Text> </Text>
              <Text style={{ 
                fontWeight: '300',
                fontSize: Dimensions.get('window').height/39,
              }}>
                {item}
              </Text>
            </Text>
          </View>
        </View>        
    )))
  }



  render() { 
    return (  
      <SafeAreaView style={styles.container}>
        <View style={styles.top}> 
          <View style={{marginBottom: Dimensions.get('window').height/100}}>
            <Text style={styles.title}>STEMI</Text>
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
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={()=>{this.dialCall()}}>
                <LinearGradient 
                  style={styles.callButton}
                  colors={['#B62619', '#F63826', '#B62619']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                >
                    <View style={{ flexDirection: 'row' }}>
                      <MaterialIcons name="phone" size={19} color="white" />
                      <Text style={{ fontSize: Dimensions.get('window').width/21, color: 'white', fontWeight: 'bold' }}> Activate Cath Lab</Text>
                    </View>
                    <Text style={{ 
                      marginTop: Dimensions.get('window').height/150, 
                      color: 'white', 
                      fontSize: Dimensions.get('window').width/24, fontWeight: '400'
                    }}>x6-8282
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
          </View>




            <View style={{ paddingTop: Dimensions.get('window').height/20, paddingBottom: Dimensions.get('window').height/80 }}>
              <Text style={{
                marginLeft: Dimensions.get('window').width/30,
                fontSize: Dimensions.get('window').width/17,
              }}>EMS or ED Identified STEMI:</Text>
            </View>

            <View>
            {this.firstFn()}
            {this.secondFn()}
            {this.thirdFn()}
            </View>


            {/* <View style={{
              marginLeft: Dimensions.get('window').width/16, 
              marginRight: Dimensions.get('window').width/16,
              marginTop: Dimensions.get('window').height/80,
              }}>
              {this.state.data.map((item) => (
                  <View key={item} style={ styles.bulletPoints }>
                  <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                      <Text style={styles.bulletPointText}>{item}</Text>
                  </View>
                  </View>        
              ))} 
          </View> */}
        </View>



     

      <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.customBtnBG} 
            onPress={() => this.props.navigation.navigate('STEMINextStepsMGH')}>
            <Text style={styles.customBtnText}>Next Steps</Text>
          </TouchableOpacity>
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
    backgroundColor: '#6c9ea1',
  },
  secondCircle: {
    width: 10,
    height: 10,
    borderRadius: 100/2,
    marginTop: Dimensions.get('window').height/150,
    borderWidth: 1,
    borderColor: '#6c9ea1',
  },
  callButton: {
    borderRadius: 40,
    height: Dimensions.get('window').height/11,
    width: Dimensions.get('window').width/1.17,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  top: {
    height: '10%',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '75%',
    // paddingTop: Dimensions.get('window').height/17,
    justifyContent: 'center',
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


  
  customBtnText: {
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/40,
    marginTop: Dimensions.get('window').height/40,
  },
  customBtnBG: {
    backgroundColor: "#8dabc2",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 15,
    width: Dimensions.get('window').width/1.2,
    height: Dimensions.get('window').height/12,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginRight: 40,
    marginTop: Dimensions.get('window').height/55,
    marginLeft: Dimensions.get('window').height/40,
  },
  bulletPointText: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/38,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
    marginRight: Dimensions.get('window').height/275
  },
  bulletPointSmall: {
    fontSize: Dimensions.get('window').height/45,
    marginRight: Dimensions.get('window').height/275
  },
})
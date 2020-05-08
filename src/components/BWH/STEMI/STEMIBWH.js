import React from 'react'
import { Linking, Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView, RotationGestureHandler } from 'react-native-gesture-handler'

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
            colors={['#146EB5', '#1D74B7', '#277ABB']}
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

  



  onPressListHidden = () => {
    this.setState({ listHidden: !this.state.listHidden})
  }

  onPressButton = () => {
    this.setState({ pressed: !this.state.pressed})
  }


  scrollToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0, animated: true})
  }

  show() {
    return (
      <View style={{marginLeft: Dimensions.get('window').width/50,}}>
          {this.state.dataTwo.map((item) => (
            <View key={item} style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.bulletPoint}>{item[0]}</Text>
                <Text style={styles.bulletPointText}> {item[1]}</Text>
              </View>
            </View>        
          ))} 
      </View>

    )
  }

  

  state = {
    data: [
      'EMS entry notification for STEMI activation (EM attending can decide to activate Code STEMI from the field based on EMS verbal report alone)',
      'Onset of symptoms of ischemia within 12 hours of ED presentation',
      'New ST segment elevations of at least 1mm in at least two contiguous leads',
      'No alternative diagnosis being pursued (e.g., aortic dissection, PE)'
    ],
    dataTwo: [
      ['1.', 'Creatinine >3.0 mg/dl or ESRD on dialysis (if known, not to delayactivation for initial lab results)'],
      ['2.', 'Dementia or other altered mental status'],
      ['3.', 'Cardiogenic shock'],
      ['4.', 'Post cardiac arrest'],
      ['5.', 'Medical futility'],
      ['6.', 'Patient preference for non-invasive management'],
      ['7.', 'DNR'],
      ['8.', 'STEMI in the setting of another acute presentation (e.g., sepsis, trauma)'],
      ['9.', 'Left bundle branch block'],
    ],
    pressed: false,
    listHidden: true,
  }

  iPhones414x736And375x812 = () => {
    if (
      Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736 || 
      Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812) {
      return true
    }
  }
  iPhones375x667 = () => {
    if (Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667){
      return true
    }
  }
  iPhones414x896 = () => {
    if (Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896){
      return true
    }
  }




  showNextStepsButton () {

    // iphones not listed yet 
    if (this.state.pressed === false && !this.iPhones414x736And375x812() || this.iPhones375x667() || this.iPhones414x896()) {
      return (
          <View style={{alignItems: 'center',  }}>
              <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200, marginTop: Dimensions.get('window').height/14,}}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('STEMIPageBWH')}>
                  <Text style={styles.customBtnText}>Next Steps</Text>
                </TouchableOpacity>
            </View>
          </View>  
      )
    } else if (this.state.pressed === true && !this.iPhones414x736And375x812() || this.iPhones375x667() || this.iPhones414x896()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMIPageBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
        </View>  
      )
    }



    // iphones 6Plus, 6sPlus, 7Plus, 8Plus 414x736 
    // iphones X, Xs, 11Pro                375x812
    if (this.state.pressed === false && this.iPhones414x736And375x812()) {
      return (
          <View style={{alignItems: 'center',  }}>
              <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200, marginTop: Dimensions.get('window').height/14,}}>
                <TouchableOpacity
                  style={styles.customBtnBG} 
                  onPress={() => this.props.navigation.navigate('STEMIPageBWH')}>
                  <Text style={styles.customBtnText}>Next Steps</Text>
                </TouchableOpacity>
            </View>
          </View>  
      )
    } else if (this.state.pressed === true && this.iPhones414x736And375x812()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMIPageBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
        </View>  
      )
    }



    // iphones 6, 6s, 7, 8 - 375x667
    if (this.state.pressed === false && this.iPhones375x667()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200, marginTop: Dimensions.get('window').height/45,}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMIPageBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
        </View>  
      )
    } else if (this.state.pressed === true && this.iPhones375x667()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200, marginTop: Dimensions.get('window').height/40,}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMIPageBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
        </View>  
      )
    }



    // iphones XR, Xs Max, 11, 11 Pro Max - 414x896
    if (this.state.pressed === false && this.iPhones414x896()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200, marginTop: Dimensions.get('window').height/8.5}}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMIPageBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
        </View>  
      )
    } else if (this.state.pressed === true && this.iPhones414x896()) {
      return (
        <View style={{alignItems: 'center',  }}>
            <View style={{alignItems: 'center', flexDirection: 'row', paddingBottom: Dimensions.get('window').height/200, }}>
              <TouchableOpacity
                style={styles.customBtnBG} 
                onPress={() => this.props.navigation.navigate('STEMIPageBWH')}>
                <Text style={styles.customBtnText}>Next Steps</Text>
              </TouchableOpacity>
          </View>
        </View>  
      )
    }
  }

  
  render() { 
    console.log('marginTop', this.state.marginTop)
    return (  
      <SafeAreaView style={styles.container}>
        <ScrollView  ref={(scroller) => {this.scroller = scroller}}>

       
   
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

          {/* <Text>{Dimensions.get('window').height}</Text>
          <Text>{Dimensions.get('window').width}</Text> */}
   





          <View style={{alignItems: 'center'}}>
            <Text style={{alignItems: 'center', marginTop: 25, fontSize: Dimensions.get('window').height/34}}>Concern for STEMI?</Text>
          </View>
  


   
          {this.state.data.map((item) => (
            <View key={item} style={ styles.bulletPoints }>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                <Text style={styles.bulletPointText}>{item}</Text>
              </View>
            </View>        
          ))} 
      





        <View style={{
                marginTop: Dimensions.get('window').height/30,
                alignItems: 'center'}}>
                <TouchableOpacity style={styles.customBtnBG2} onPress={() => {
                  this.onPressListHidden()
                  this.onPressButton()
                  this.scrollToTop()
                }}>
                  <Text style={styles.customBtnText2}>See Exclusion Criteria</Text>
                </TouchableOpacity>

                <View>
                  {!this.state.listHidden ? this.show() : null}
                </View> 
              </View>  


 

              {this.showNextStepsButton()}



  
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  marginTop414x736: {
    alignItems: 'center',
    marginTop: 30
  },
  // marginTop414x736: {
  //   marginTop: this.state.marginTop
  // },
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
    backgroundColor: 'white'
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
  text: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPoint: {
    fontSize: Dimensions.get('window').height/40,
  },
  bulletPoints: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/150,
    marginLeft: Dimensions.get('window').width/13,
    marginRight: Dimensions.get('window').width/8,
  },
  bulletPointText: {
    marginLeft: Dimensions.get('window').width/100,
    fontSize: Dimensions.get('window').width/19,

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
  customBtnText2: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/46,
    marginTop: Dimensions.get('window').height/100,
  },
  customBtnBG2: {
    borderRadius: 10,
    backgroundColor: "#ededed",
    width: Dimensions.get('window').width/1.25,
    height: Dimensions.get('window').height/22, 
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowOffset : { width: 1, height: 4},
  },
}) 
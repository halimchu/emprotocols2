import React from 'react'
import { Image, Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

export default class COVIDHomeMGH extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let headerLeft = ( 
      <View style={{ flexDirection: 'row' }}>
          <Button 
            icon={
              <View style={{ marginLeft: Dimensions.get('window').width/45, }}>
                <Icon name="ios-arrow-back" size={Dimensions.get('window').height/26} color="white" />
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
              <Icon name="md-home" size={Dimensions.get('window').height/26} color="white" />
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

  iPhonesUpTo8 = () => {
    if (
      Dimensions.get('window').width === 375 && Dimensions.get('window').height === 667 ||
      Dimensions.get('window').width === 414 && Dimensions.get('window').height === 736 ||
      Dimensions.get('window').width === 320 && Dimensions.get('window').height === 568
    ){
      return true
    }
  }

  render() { 
    return (  
        <SafeAreaView style={styles.container}>

            <Image
              source={require('../../../../assets/1125x400_3x_covid.png')}
              style={[ this.iPhonesUpTo8() ? styles.imageiPhonesUpTo8 : styles.imageiPhonesAfter8]}
            />


     

     




  
  
          <View style={{flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{ marginLeft: Dimensions.get('window').width/13 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDTestingCriteriaMGH')}>
                            {/* onPress={ () => { Linking.openURL('https://www.dropbox.com/s/riubb9c7f703iu6/TestingMGH.pdf?dl=0')}} > */}
                            <Text style={styles.customBtnTextFirstLine}>Testing</Text>
                            <Text style={styles.customBtnTextSecondLine}>Criteria</Text>
                          </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDWorkflowMGH')}>
                            <Text style={styles.customBtnTextSingleLine}>Workflow</Text>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('ClinicalManagementMGH')}>
                            <Text style={styles.customBtnTextFirstLine}>Clinical</Text>
                            <Text style={styles.customBtnTextSecondLine}>Management</Text>
                          </TouchableOpacity>  
                </View>
                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDDispoMGH')}>
                            <Text style={styles.customBtnTextSingleLine}>Dispo</Text>
                          </TouchableOpacity>
                </View>

                {/* <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('')}>
                            <Text style={styles.customBtnTextFirstLine}>Other</Text>
                            <Text style={styles.customBtnTextSecondLine}>Logistics</Text>
                          </TouchableOpacity>  
                </View> */}
                


     
          </View>





         
                






                  <View style={{paddingTop: Dimensions.get('window').height/30, paddingBottom: Dimensions.get('window').height/70, alignItems: 'center'}}>
                    <Text style={styles.header}>Contacts</Text>
                  </View>


              



<View style={{marginLeft: Dimensions.get('window').width/19,}}>

                      <View style={{ flexDirection: 'row' }}>
                        <View style={{  marginTop: 1.5}}>
                            <TouchableOpacity
                                  style={styles.customBtnBG2}
                                  onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.mwl?APP=PDPERS&FF=PDA&ACTION=FROMDESKTOP&DACTION=PAGE&DTID=244807&DSRCHNM=')}}>
                                  <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40,  marginTop: Dimensions.get('window').height/30,}}>
                                      <FontAwesome5Icons name="pager" size={22} color="black" />
                                      <Text style={styles.customBtnTextSingleLinePager}> Biothreats</Text>
                                  </View> 
                              </TouchableOpacity>
                        </View>



                      

                        <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                            <TouchableOpacity
                                  style={styles.customBtnBG2}
                                  onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&ACTION=FROMDESKTOP&DACTION=PAGE&DSRCHNM=&DTID=246472&FF=PDA')}}>
                                  <View style={{flexDirection: 'row',marginLeft: Dimensions.get('window').width/40,  marginTop: Dimensions.get('window').height/30,}}>
                                      <FontAwesome5Icons name="pager" size={22} color="black" />
                                      <Text style={styles.customBtnTextSingleLinePager}> Intensivist (ICU)</Text>
                                  </View> 
                              </TouchableOpacity>
                        </View> 
                      </View>


                        

                      <View style={{ flexDirection: 'row', marginTop: 1.5}}>
                      
                              <TouchableOpacity
                                    style={styles.customBtnBG2}
                                    onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=FROMDESKTOP&DACTION=PAGE&DTID=198608&DSRCHNM=')}}>
                                    <View style={{flexDirection: 'row',marginLeft: Dimensions.get('window').width/40,  marginTop: Dimensions.get('window').height/50,}}>
                                        <FontAwesome5Icons name="pager" size={22} color="black" />
                                        <Text style={styles.customBtnTextSingleLinePager}> Palliative Care</Text>
                                    </View> 
                                    <View style={{marginLeft: Dimensions.get('window').width/10.5,}}>
                                        <Text style={styles.customBtnTextSingleLinePagerSub}>(Mon-Sun 8A-4P)</Text>
                                    </View>
                              </TouchableOpacity>
                          
                   

                        
          

                        

                          <View style={{ marginLeft: 1.5, }}>
                            <TouchableOpacity
                                  style={styles.customBtnBG2}
                                  onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=FROMDESKTOP&DACTION=PAGE&DTID=48423&DSRCHNM=')}}>
                                  <View style={{flexDirection: 'row',marginLeft: Dimensions.get('window').width/40,  marginTop: Dimensions.get('window').height/50,}}>
                                      <FontAwesome5Icons name="pager" size={22} color="black" />
                                      <Text style={styles.customBtnTextSingleLinePager}> Palliative Care</Text>
                                  </View> 
                                  <View style={{marginLeft: Dimensions.get('window').width/10.5}}>
                                    <Text style={styles.customBtnTextSingleLinePagerSub}>(After Hours)</Text>
                                  </View>
                              </TouchableOpacity>
                        </View> 

                    </View>


                       
                  <View style={{ flexDirection: 'row',  marginTop: 1.5}}>
                      
                      <TouchableOpacity
                            style={styles.customBtnBG2}
                            onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=SEARCHRES&SRCHNM=26346')}}>
                            <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40,  marginTop: Dimensions.get('window').height/50,}}>
                                <FontAwesome5Icons name="pager" size={22} color="black" />
                                <Text style={styles.customBtnTextSingleLinePager}> Infection</Text>
                            </View> 
                            <View style={{marginLeft: Dimensions.get('window').width/10.5}}>
                              <Text style={styles.customBtnTextSingleLinePager}>Control</Text>
                            </View>
                      </TouchableOpacity>
                


                       
                          <View style={{ marginLeft: 1.5, }}>
                            <TouchableOpacity
                                  style={styles.customBtnBG2}
                                  onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=SEARCHRES&SRCHNM=23559')}}>
                                  <View style={{flexDirection: 'row',marginLeft: Dimensions.get('window').width/40,  marginTop: Dimensions.get('window').height/50,}}>
                                      <FontAwesome5Icons name="pager" size={22} color="black" />
                                      <Text style={styles.customBtnTextSingleLinePager}> Case</Text>
                                  </View> 
                                  <View style={{marginLeft: Dimensions.get('window').width/10.5}}>
                                    <Text style={styles.customBtnTextSingleLinePager}>Management</Text>
                                  </View>
                              </TouchableOpacity>
                        </View> 

                    </View>


                    <View style={{ flexDirection: 'row',  marginTop: 1.5}}>
                      
                      <TouchableOpacity
                            style={styles.customBtnBG2}
                            onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=PAGE&TID=296480')}}>
                            <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40,  marginTop: Dimensions.get('window').height/50,}}>
                                <FontAwesome5Icons name="pager" size={22} color="black" />
                                <Text style={styles.customBtnTextSingleLinePager}> Alt. Pathway</Text>
                            </View> 
                            <View style={{marginLeft: Dimensions.get('window').width/10.5}}>
                              <Text style={styles.customBtnTextSingleLinePager}>Navigator</Text>
                            </View>
                      </TouchableOpacity>
                    </View>
</View>







               
        </SafeAreaView>
    )
  }
}
  
const styles = StyleSheet.create({
  imageiPhonesUpTo8: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height/5,
  },
  imageiPhonesAfter8: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height/6
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    height: '9%',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  middle: {
    height: '30%',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    // backgroundColor: 'pink',
  },


  
  title: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: 'bold',
    color: 'red',
    fontSize: Dimensions.get('window').height/35, 
  },
  header: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/42, 
  },
  button: {
    marginTop: Dimensions.get('window').height/100
  },
  customBtnTextSingleLinePager: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    // textAlign: 'center',
    // fontSize: Dimensions.get('window').height/47,
    fontSize: Dimensions.get('window').height/50,
  },
  customBtnTextSingleLinePagerSub: {
    // textAlign: 'center',
    // textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/58,
  },
  customBtnTextSingleLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/25,
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnTextFirstLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/40,
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnTextSecondLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnBG: {
    borderRadius: 5,
    backgroundColor: "#e8e8e8",
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/9.5,
  },
  customBtnBG2: {
    backgroundColor: "#e8e8e8",
    borderRadius: 25,
    width: Dimensions.get('window').width/2.25,
    height: Dimensions.get('window').height/10.5,
  },
  customBtnTextSingleLinePager2: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/47,
    // justifyContent: 'center',
    // marginTop: 20,
  }
})
import React from 'react'
import { Image, Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { generateNavigationOptions } from '../../../../utils/header'

export default class COVIDHomeMGH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#02bfdb', '#00c0dc', '#02c1dd'], 'MGH', 'arrow-back-ios') 
  }


  render() { 
    return (  
        <SafeAreaView style={styles.container}>

            <Image
              source={require('../../../../assets/MGH1125x400_3x_covid.png')}
              style={styles.image}
            />


     
  
          <View style={{marginTop: Dimensions.get('window').height/100, flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{ marginLeft: Dimensions.get('window').width/13 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDTestingCriteriaMGH')}>
                               <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                  <Text style={styles.text}>Testing</Text>
                                  <Text style={styles.text}>Criteria</Text>
                               </View>
                          </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDWorkflowMGH')}>
                            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                              <Text style={styles.text}>Workflow</Text>
                            </View>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('ClinicalManagementMGH')}>
                            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                              <Text style={styles.text}>Clinical</Text>
                              <Text style={styles.text}>Management</Text>
                            </View>
                          </TouchableOpacity>  
                </View>
                <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => this.props.navigation.navigate('COVIDDispoMGH')}>
                              <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                <Text style={styles.text}>Dispo</Text>
                              </View>
                          </TouchableOpacity>
                </View>
          </View>





         
                






                  <View style={{paddingTop: Dimensions.get('window').height/30, paddingBottom: Dimensions.get('window').height/70, alignItems: 'center'}}>
                    <Text style={styles.header}>Contacts</Text>
                  </View>


              



<View style={{marginLeft: Dimensions.get('window').width/18,}}>

                      <View style={{ flexDirection: 'row' }}>
                        <View style={{  marginTop: 1.5}}>
                            <TouchableOpacity
                                  style={styles.customBtnBG2}
                                  onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.mwl?APP=PDPERS&FF=PDA&ACTION=FROMDESKTOP&DACTION=PAGE&DTID=244807&DSRCHNM=')}}>
                                  <View style={{justifyContent: 'center', flex: 1}}>
                                    <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40, }}>
                                      <FontAwesome5Icons name="pager" size={22} color="black" />
                                      <Text style={styles.customBtnTextSingleLinePager}> Biothreats</Text>
                                    </View>
                                  </View> 
                              </TouchableOpacity>
                        </View>



                      

                        <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                            <TouchableOpacity
                                  style={styles.customBtnBG2}
                                  onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&ACTION=FROMDESKTOP&DACTION=PAGE&DSRCHNM=&DTID=246472&FF=PDA')}}>
                                   <View style={{justifyContent: 'center', flex: 1}}>
                                      <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40, }}>
                                        <FontAwesome5Icons name="pager" size={22} color="black" />
                                        <Text style={styles.customBtnTextSingleLinePager}> Intensivist (ICU)</Text>
                                      </View>
                                  </View> 
                              </TouchableOpacity>
                        </View> 
                      </View>


                        

                      <View style={{ flexDirection: 'row', marginTop: 1.5}}>
                      
                              <TouchableOpacity
                                    style={styles.customBtnBG2}
                                    onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=FROMDESKTOP&DACTION=PAGE&DTID=198608&DSRCHNM=')}}>
                                     <View style={{justifyContent: 'center', flex: 1}}>
                                      <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40, }}>
                                        <FontAwesome5Icons name="pager" size={22} color="black" />
                                        <Text style={styles.customBtnTextSingleLinePager}> Palliative Care</Text>
                                      </View> 
                                      <View style={{marginLeft: Dimensions.get('window').width/10.5,}}>
                                          <Text style={styles.customBtnTextSingleLinePagerSub}>(Mon-Sun 8A-4P)</Text>
                                      </View>
                                    </View>
                              </TouchableOpacity>
                          
                   

                        
          

                        

                          <View style={{ marginLeft: 1.5, }}>
                            <TouchableOpacity
                                  style={styles.customBtnBG2}
                                  onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=FROMDESKTOP&DACTION=PAGE&DTID=48423&DSRCHNM=')}}>
                                  <View style={{justifyContent: 'center', flex: 1}}>
                                    <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40, }}>
                                      <FontAwesome5Icons name="pager" size={22} color="black" />
                                      <Text style={styles.customBtnTextSingleLinePager}> Palliative Care</Text>
                                  </View> 
                                  <View style={{marginLeft: Dimensions.get('window').width/10.5}}>
                                    <Text style={styles.customBtnTextSingleLinePagerSub}>(After Hours)</Text>
                                  </View>
                                  </View>
                              </TouchableOpacity>
                        </View> 

                    </View>


                       
                  <View style={{ flexDirection: 'row',  marginTop: 1.5}}>
                      
                      <TouchableOpacity
                            style={styles.customBtnBG2}
                            onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=SEARCHRES&SRCHNM=26346')}}>
                           <View style={{justifyContent: 'center', flex: 1}}>
                            <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40, }}>
                                <FontAwesome5Icons name="pager" size={22} color="black" />
                                <Text style={styles.customBtnTextSingleLinePager}> Infection</Text>
                            </View> 
                            <View style={{marginLeft: Dimensions.get('window').width/10.5}}>
                              <Text style={styles.customBtnTextSingleLinePager}>Control</Text>
                            </View>
                            </View>
                      </TouchableOpacity>
                


                       
                          <View style={{ marginLeft: 1.5, }}>
                            <TouchableOpacity
                                  style={styles.customBtnBG2}
                                  onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=SEARCHRES&SRCHNM=23559')}}>
                                  <View style={{justifyContent: 'center', flex: 1}}>
                                      <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40, }}>
                                      <FontAwesome5Icons name="pager" size={22} color="black" />
                                      <Text style={styles.customBtnTextSingleLinePager}> Case</Text>
                                  </View> 
                                  <View style={{marginLeft: Dimensions.get('window').width/10.5}}>
                                    <Text style={styles.customBtnTextSingleLinePager}>Management</Text>
                                  </View>
                                  </View>
                              </TouchableOpacity>
                        </View> 

                    </View>


                    <View style={{ flexDirection: 'row',  marginTop: 1.5}}>
                      
                      <TouchableOpacity
                            style={styles.customBtnBG2}
                            onPress={ () => { Linking.openURL('https://ppd.partners.org/scripts/phsweb.swl?APP=PDPERS&FF=PDA&ACTION=PAGE&TID=296480')}}>
                            <View style={{justifyContent: 'center', flex: 1}}>
                              <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/40, }}>
                                <FontAwesome5Icons name="pager" size={22} color="black" />
                                <Text style={styles.customBtnTextSingleLinePager}> Alt. Pathway</Text>
                            </View> 
                            <View style={{marginLeft: Dimensions.get('window').width/10.5}}>
                              <Text style={styles.customBtnTextSingleLinePager}>Navigator</Text>
                            </View>
                            </View>
                      </TouchableOpacity>
                    </View>
</View>







               
        </SafeAreaView>
    )
  }
}
  
const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').width/3,
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
    fontWeight: 'bold',
    color: 'red',
    fontSize: Dimensions.get('window').height/35, 
  },
  header: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/42, 
  },
  button: {
    marginTop: Dimensions.get('window').height/100
  },
  customBtnTextSingleLinePager: {
    fontWeight: '600',
    fontSize: Dimensions.get('window').height/50,
  },
  customBtnTextSingleLinePagerSub: {
    fontSize: Dimensions.get('window').height/58,
  },
  text: {
    fontWeight: '600',
    color: "black",
    fontSize: Dimensions.get('window').height/47,
  },

  customBtnTextSecondLine: {
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
  }
})
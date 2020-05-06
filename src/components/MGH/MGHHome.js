import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import LinearGradient from 'react-native-linear-gradient'



export default class MGHHome extends React.Component {
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
            colors={['#02bfdb', '#00c0dc', '#02c1dd']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
        />
      ),   
      // headerBackground: (
      //   <LinearGradient
      //       colors={['#06b8d6' ]}
      //       style={{ flex: 1 }}
      //       start={{x: 0, y: 0}}
      //       end={{x: 1, y: 0}}
      //   />
      // ),   
    }
  }

  render() { 
    return (   
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.top}> */}

          {/* <Image
            source={require('../../../assets/header3x.png')}
            style={{
              // marginRight: Dimensions.get('window').width/35, 
              // width: Dimensions.get('window').width, 
              // height: Dimensions.get('window').height/4
              width: Dimensions.get('window').width, 
              height: Dimensions.get('window').height/3.75
            }}
          /> */}
        {/* </View> */}



      


        <View style={styles.middle}>
            <Image
                // source={require('../../../assets/header3x.png')}
                // source={require('../../../assets/headerMGHBWH.png')}
                // source={require('../../../assets/headerMGHBWH750x250_2x.png')}
                source={require('../../../assets/1125x400_3x.png')}
                style={{
                  // marginRight: Dimensions.get('window').width/35, 
                  // width: Dimensions.get('window').width, 
                  // height: Dimensions.get('window').height/4
                  marginBottom: Dimensions.get('window').height/30,
                  width: Dimensions.get('window').width, 
                  height: Dimensions.get('window').height/6
                }}
            />

     

          <View style={{ paddingTop: 5, flexDirection: 'row', flexWrap: 'wrap',}}>
              <View style={{ marginLeft: Dimensions.get('window').width/13, }}>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('ACLSHome')}>
                          <Text style={styles.customBtnTextSingleLine}>ACLS</Text>
                        </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 1.5 }}>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('ADMGH')}>
                          <Text style={styles.customBtnTextSingleLine}>Acute Aortic Syndrom</Text>
                        </TouchableOpacity>
              </View> 
              <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('RICUMGH')}>
                          <Text style={styles.customBtnTextFirstLine}>Difficult</Text>
                          <Text style={styles.customBtnTextSecondLine}>Airway</Text>
                        </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 1.5, marginTop: 1.5}}>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('MTPMGH')}>
                          <Text style={styles.customBtnTextFirstLineMTP}>Massive</Text>
                          <Text style={styles.customBtnText}>Transfusion</Text>
                          <Text style={styles.customBtnText}>Protocol</Text>
                        </TouchableOpacity>
              </View>
              <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5 }}>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('PertMGH')}>
                          <Text style={styles.customBtnTextFirstLine}>Pulmonary</Text>
                          <Text style={styles.customBtnTextSecondLine}>Embolism</Text>
                        </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('STEMIMGH')}>
                          <Text style={styles.customBtnTextSingleLine}>STEMI</Text>
                        </TouchableOpacity>
              </View>
              <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('StrokeMGH')}>
                          <Text style={styles.customBtnTextSingleLine}>Stroke</Text>
                        </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('TraumaMGH')}>
                          <Text style={styles.customBtnTextSingleLine}>Trauma</Text>
                        </TouchableOpacity>
              </View>
          </View>
        </View>


        

        
        <View style={styles.bottom}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('COVIDHomeMGH')}>
                <LinearGradient 
                  style={styles.covidButton}
                  colors={['#9A0100', '#E7522E']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                >
                  <Text style={styles.covidCustomBtnText}>COVID-19</Text>
                </LinearGradient>
              </TouchableOpacity>
        </View>
      
        


      </SafeAreaView>
    )
  }
}
  
const styles = StyleSheet.create({
  covidCustomBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/32,
  },
  covidButton: {
    borderRadius: 15,
    height: Dimensions.get('window').height/10.5,
    width: Dimensions.get('window').width/1.2,
  },


  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // top: {
  //   height: '30%',
  //   // paddingTop: Dimensions.get('window').height/21, 
  //   // alignItems: 'center',
  //   // backgroundColor: 'yellow'
  // },
  middle: {
    height: '85%',
    // flexDirection: 'row', 
    // flexWrap: 'wrap',
    // paddingTop: Dimensions.get('window').height/45, 
    // backgroundColor: 'pink'
  },
  bottom: {
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'gray'
  },
  


  title: {
    // fontFamily: 'Interstate-Bold',
    fontSize: Dimensions.get('window').height/40, 
  },
  button: {
    marginTop: Dimensions.get('window').height/100
  },
  customBtnBG: {
    backgroundColor: "#e8e8e8",
    // backgroundColor: '#e0e0e0',
    // backgroundColor: '#DCE2EA',
    borderRadius: 5,
    width: Dimensions.get('window').width/2.385,
    height: Dimensions.get('window').height/9,
  },
  customBtnTextSingleLine: {
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/25,
    fontSize: Dimensions.get('window').height/45,
  },
  customBtnTextFirstLine: {
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/35,
    fontSize: Dimensions.get('window').height/45,
  },
  customBtnTextSecondLine: {
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/45,
  },
  customBtnTextFirstLineMTP: {
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/70,
    fontSize: Dimensions.get('window').height/45,
  },
  customBtnText: {
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/45,
  },
})


import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { generateNavigationOptions } from '../../../utils/header' 

 
export default class MGHHome extends React.Component {

  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#02bfdb', '#00c0dc', '#02c1dd'], 'MGH', 'arrow-back-ios') 
  }

  render() { 
    return (   
      <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Image
                  source={require('../../../assets/1125x400_3x.png')}
                  style={styles.image}
                />
            </View>

     

            <View style={styles.bottom}> 
              <View style={{ marginLeft: Dimensions.get('window').width/13, }}>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('ACLSHomeMGH')}>
                          <Text style={styles.customBtnTextSingleLine}>ACLS</Text>
                        </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 1.5 }}>
                        <TouchableOpacity
                          style={styles.customBtnBG} 
                          onPress={() => this.props.navigation.navigate('ADMGH')}>
                          <Text style={styles.customBtnTextFirstLine}>Acute Aortic</Text>
                          <Text style={styles.customBtnTextSecondLine}>Syndrome</Text>
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

              <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 5}}>
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
        </View>




      </SafeAreaView>
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    height: '20%',
    // backgroundColor: 'yellow'
  },
  bottom: {
    height: '60%',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    paddingTop: Dimensions.get('window').height/25, 
    // backgroundColor: 'brown'
  },


  image: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').width/3,
  },
  covidCustomBtnText: {
    fontWeight: '600',
    color: "#fff",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/35,
    marginTop: Dimensions.get('window').height/28,
  },
  covidButton: {
    borderRadius: 5,
    width: Dimensions.get('window').width/1.19,
    height: Dimensions.get('window').height/9,
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


import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { generateNavigationOptions } from '../../../utils/header'

export default class BWHHome extends React.Component {

  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH', 'arrow-back-ios') 
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

  
  
          <View style={styles.top}>
              <Image
                  source={require('../../../assets/BWH_1125x400_3x.png')}
                  style={styles.image}
              />
          </View>


            {/* <Text>{Dimensions.get('window').width}</Text>
            <Text>{Dimensions.get('window').height}</Text> */}

          <View style={styles.bottom}>

                    <View style={{ marginLeft: Dimensions.get('window').width/13, }}>
                              <TouchableOpacity
                                style={styles.customBtnBG} 
                                onPress={() => this.props.navigation.navigate('ACLSHomeBWH')}>
                                <Text style={styles.customBtnTextSingleLine}>ACLS</Text>
                              </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 1.5 }}>
                              <TouchableOpacity
                                style={styles.customBtnBG} 
                                onPress={() => this.props.navigation.navigate('ADBWH')}>
                                <Text style={styles.customBtnTextFirstLine}>Acute Aortic</Text>
                                <Text style={styles.customBtnTextSecondLine}>Syndrome</Text>
                              </TouchableOpacity>
                    </View> 
                    <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                              <TouchableOpacity
                                style={styles.customBtnBG} 
                                onPress={() => this.props.navigation.navigate('RICUBWH')}>
                                <Text style={styles.customBtnTextFirstLine}>Difficult</Text>
                                <Text style={styles.customBtnTextSecondLine}>Airway</Text>
                              </TouchableOpacity>  
                    </View> 
                    <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                              <TouchableOpacity
                                style={styles.customBtnBG} 
                                onPress={() => this.props.navigation.navigate('MTPBWH')}>
                                <Text style={styles.customBtnTextFirstLineMTP}>Massive</Text>
                                <Text style={styles.customBtnTextMTP}>Transfusion</Text>
                                <Text style={styles.customBtnTextMTP}>Protocol</Text>
                              </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                              <TouchableOpacity
                                style={styles.customBtnBG} 
                                onPress={() => this.props.navigation.navigate('FirstPagePE')}>
                                <Text style={styles.customBtnTextFirstLine}>Pulmonary</Text>
                                <Text style={styles.customBtnTextSecondLine}>Embolism</Text>
                              </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                              <TouchableOpacity
                                style={styles.customBtnBG} 
                                onPress={() => this.props.navigation.navigate('STEMIBWH')}>
                                <Text style={styles.customBtnTextSingleLine}>STEMI</Text>
                              </TouchableOpacity>
                    </View>
                    <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 1.5}}>
                              <TouchableOpacity
                                style={styles.customBtnBG} 
                                onPress={() => this.props.navigation.navigate('StrokeBWH')}>
                                <Text style={styles.customBtnTextSingleLine}>Stroke</Text>
                              </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 1.5, marginTop: 1.5 }}>
                              <TouchableOpacity
                                style={styles.customBtnBG} 
                                onPress={() => this.props.navigation.navigate('TraumaBWH')}>
                                <Text style={styles.customBtnTextSingleLine}>Trauma</Text>
                              </TouchableOpacity>
                    </View>


                    <View style={{marginLeft: Dimensions.get('window').width/13, marginTop: 5}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('COVIDHomeBWH')}>
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
  image: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').width/3,
  },
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
    height: '100%',
    backgroundColor: 'white',
    // backgroundColor: 'pink'
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
  


  title: {
    fontSize: Dimensions.get('window').height/40, 
  },
  customBtnBG: {
    backgroundColor: '#e8e8e8', 
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
  customBtnTextMTP: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/45,
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
})
import React from 'react'
import { Linking, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' 
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

export default class COVIDWorkflowBWH extends React.Component {
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
        colors={['#146EB5', '#1D74B7', '#277ABB']}
        style={{ flex: 1 }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      />
      ),    
    }
  }

  render() { 
    return (  
        <SafeAreaView style={styles.container}>
          <View style={styles.top}>
            <View style={{alignItems: 'center', marginBottom: Dimensions.get('window').height/100, }}>
              <Text style={styles.title}>
                <Text style={{color: 'red'}}>COVID-19 </Text>
                <Text>Workflow</Text>
              </Text>

            </View>
              <Divider />
          </View>
  
  
          <View style={{ flexDirection: 'row', flexWrap: 'wrap',}}>
                <View style={{ marginLeft: Dimensions.get('window').width/13, }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/sgs8krrvkfsqwi5/AdultWorkflow_BWH.pdf?dl=0')}} >
                            <Text style={styles.customBtnTextFirstLine}>Adult</Text>
                            <Text style={styles.customBtnTextSecondLine}>Workflow</Text>
                          </TouchableOpacity>
                </View>
                <View style={{marginLeft: 1.5}}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={() => {Linking.openURL('https://www.dropbox.com/s/20debp12i4nitsj/TraumaWorkflow_BWH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Trauma</Text>
                            <Text style={styles.customBtnTextSecondLine}>Workflow</Text>
                          </TouchableOpacity>  
                </View>
                
                <View style={{ marginLeft: Dimensions.get('window').width/13, marginTop: 1.5 }}>
                          <TouchableOpacity
                            style={styles.customBtnBG} 
                            onPress={ () => { Linking.openURL('https://www.dropbox.com/s/yuifb6oo79822th/DeathPaperwork_BWH.pdf?dl=0')}}>
                            <Text style={styles.customBtnTextFirstLine}>Death</Text>
                            <Text style={styles.customBtnTextSecondLine}>Paperwork</Text>
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
    height: '100%',
    backgroundColor: 'white'
  },
  top: {
    height: '10%',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  
  title: {
    fontWeight: 'bold',
    color: '#2b2b2b',
    fontSize: Dimensions.get('window').height/35, 
  },
  button: {
    marginTop: Dimensions.get('window').height/100
  },
  customBtnTextSingleLinePager: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/35,
  },
  customBtnTextSingleLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/19,
    fontSize: Dimensions.get('window').height/47,
  },
  customBtnTextFirstLine: {
    // fontFamily: 'Interstate-Bold',
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    paddingTop: Dimensions.get('window').height/24,
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
    height: Dimensions.get('window').height/7.36,
  },
})
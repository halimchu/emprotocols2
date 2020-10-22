import React from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import { generateNavigationOptions } from '../../../../utils/header'


export default class TraumaBWH extends React.Component {
  static navigationOptions (props) {
    return generateNavigationOptions(props.navigation, ['#146EB5', '#1D74B7', '#277ABB'], 'BWH', 'arrow-back-ios') 
  }


  render() {  
      return (  
      <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Trauma</Text>
            <View style={{marginTop: Dimensions.get('window').height/64}}>
              <Divider />
            </View>

            <View style={{marginTop: Dimensions.get('window').height/4.5}}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                          style={styles.button} 
                          onPress={() => this.props.navigation.navigate('TraumaSceneUndesignatedBWH')}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={styles.text}>Scene/Undesignated</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: Dimensions.get('window').height/15, }}>
                        <TouchableOpacity
                          style={styles.button} 
                          onPress={() => this.props.navigation.navigate('TraumaTransferBWH')}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={styles.text}>Transfer</Text>
                            </View>
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
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#e8e8e8', 
    borderRadius: 20,
    width: Dimensions.get('window').width/1.5,
    height: Dimensions.get('window').height/10,
    borderWidth: .3,
    borderColor: '#808080'
  },
  text: {
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    textAlignVertical: "center",
    fontSize: Dimensions.get('window').height/45,
  },
  
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2b2b2b',
    marginTop: Dimensions.get('window').height/60,
    fontSize: Dimensions.get('window').height/32.5,
  },
})
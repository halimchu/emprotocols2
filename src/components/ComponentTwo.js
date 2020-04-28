import React from 'react'
import { TouchableOpacity, Dimensions, View, Text, StyleSheet } from 'react-native'

export default class ComponentTwo extends React.Component {

  ifPresent = () => {
    if (!this.props.hidden) {
      if (this.props.goToTopOfButton) {
        this.props.goToTopOfButton()
      }
    } else {
      return null
    }
  }


  render() {
    return (
      <View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.customBtnBG} onPress={() => {
            this.props.toggle()
          }}>
            <Text style={styles.customBtnText}>{this.props.buttonTitle}</Text>
          </TouchableOpacity>
        </View>

        {!this.props.hidden ? this.props.component : null} 
        

      </View>
    )
  }
}


const styles = StyleSheet.create({
  customBtnText: {
    fontWeight: '600',
    color: "white",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/44,
    marginTop: Dimensions.get('window').height/80,
  },
  customBtnBG: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#A7A7A7',
    width: Dimensions.get('window').width/1,
    height: Dimensions.get('window').height/18,
  },
})
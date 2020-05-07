import React from 'react'
import { TouchableOpacity, Dimensions, View, Text, StyleSheet } from 'react-native'

export default class Component extends React.Component {

  // ifPresent = () => {
  //   if (this.props.buttonTitle === 'Code Alpha' && !this.props.hidden) {
  //     this.props.goToNextComponent = null
  //     // return null
  //   } else {
  //     this.props.goToNextComponent()
  //   }
  // }

  ifPresent = () => {
    if (this.props.buttonTitle === 'Code Alpha') {
      if (!this.props.hidden) {
        // if () {

        // }
        this.props.goToNextComponent()
      }
    } else {
      this.props.goToNextComponent = null
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
        {/* {!this.props.hidden ? this.props.goToNextComponent() : null} */}
        {!this.props.hidden ? this.ifPresent() : null}

      </View>
    )
  }
}


const styles = StyleSheet.create({
  customBtnText: {
    fontWeight: '600',
    color: "#333333",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/44,
    marginTop: Dimensions.get('window').height/80,
  },
  customBtnBG: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#d4d4d4',
    width: Dimensions.get('window').width/1,
    height: Dimensions.get('window').height/18,
  },
})
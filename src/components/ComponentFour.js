import React from 'react'
import { TouchableOpacity, Dimensions, View, Text, StyleSheet } from 'react-native'

export default class ComponentFour extends React.Component {


  backgroundColor() {
    return this.props.color
  }


  render() {
    return (
      <View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity 
            style={{
              borderWidth: 1,
              borderColor: 'white',
              width: Dimensions.get('window').width/1,
              height: Dimensions.get('window').height/18,
              backgroundColor: this.props.color
            }} 
            onPress={() => {this.props.toggle()}}
          >
            <Text style={styles.customBtnText}>{this.props.buttonTitle}</Text>
          </TouchableOpacity>
        </View>

        {!this.props.hidden ? this.props.component : null} 
        {/* {!this.props.hidden ? this.ifPresent() : null} */}

      </View>
    )
  }
}


const styles = StyleSheet.create({
  customBtnText: {
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/44,
    marginTop: Dimensions.get('window').height/80,
  },
  customBtnBG: {
    borderWidth: 1,
    borderColor: 'white',
    // backgroundColor: this.props.color,
    width: Dimensions.get('window').width/1,
    height: Dimensions.get('window').height/18,
  },
})
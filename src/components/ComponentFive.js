import React from 'react'
import { TouchableOpacity, Dimensions, View, Text, StyleSheet } from 'react-native'

export default class ComponentFive extends React.Component {
  render() {
    return (
      <View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.customBtnBG} onPress={() => {
            this.props.toggle()
            this.props.scrollToTop()
          }}>
            <Text style={styles.customBtnText}>{this.props.buttonTitle}</Text>
          </TouchableOpacity>
        </View>

        {!this.props.hidden ? this.props.component : null}
        {!this.props.hidden ? this.props.goToNextComponent() : null}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  customBtnText: {
    fontWeight: '600',
    color: "black",
    textAlign: 'center',
    fontSize: Dimensions.get('window').height/54,
    marginTop: Dimensions.get('window').height/85,
  },
  customBtnBG: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#dedede',
    width: Dimensions.get('window').width/1,
    height: Dimensions.get('window').height/20,
  },
})
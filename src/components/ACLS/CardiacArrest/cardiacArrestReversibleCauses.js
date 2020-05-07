import React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'

export default class CardiacArrestReversibleCauses extends React.Component {

  render() {
    return (
      <View style={{ marginBottom: Dimensions.get('window').height/80, }}>
      

                <View style={{flexDirection: 'row', }}>
                  <View style={{
                    flexWrap: 'wrap', flex: 1, 
                    paddingLeft: Dimensions.get('window').height/80,
                    // backgroundColor: 'yellow', 
                  }}>

                    <View style={{flexDirection: 'column', }}>
                                  <View style={styles.flexDirection}>
                                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.bold}>H</Text>
                                    <Text style={styles.regular}>ypovolemia</Text>
                                  </View>

                                  {/* <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>IV fluid boluses</Text>
                                  </View>

                                  <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>Vasopressors</Text>
                                  </View> */}

                                  <View style={styles.flexDirection}>
                                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                      <Text style={styles.bold}>H</Text>
                                      <Text style={styles.regular}>ypoxia</Text>
                                  </View>

                                  {/* <View style={{flexDirection: 'row'}}>
                                      <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                      <Text style={styles.subRegular}>Bag-valve-mask</Text>
                                  </View> 

                                  <View style={{flexDirection: 'row'}}>
                                      <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                      <Text style={styles.subRegular}>Intubation</Text>
                                  </View> */}

                                  <View style={styles.flexDirection}>
                                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.bold}>H</Text>
                                    <Text style={styles.regular}>ydrogen ion</Text>
                                  </View>
                                  <View style={styles.titleBottom}>
                                    <Text style={styles.regular}>(acidosis)</Text>
                                  </View>  
                                  {/* <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>Sodium</Text>
                                  </View>  
                                  <View style={{ marginLeft: Dimensions.get('window').width/20 }}>
                                    <Text style={styles.subRegular}>bicarbonate</Text>
                                  </View> */}




                                  <View style={styles.flexDirection}>
                                      <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                      <Text style={styles.bold}>H</Text>
                                      <Text style={styles.regular}>ypo-/</Text>
                                </View>

                                  <View style={{flexDirection: 'row', marginLeft: Dimensions.get('window').width/55.5,}}>
                                      <Text style={styles.regular}>h</Text>
                                      <Text style={styles.regular}>yperkalemia</Text>
                                  </View>
                                
                                  {/* <View style={{flexDirection: 'row'}}>
                                      <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                      <Text style={styles.subRegular}>Hypokalemia:</Text>
                                  </View>
                                  <View style={styles.subBulletPointSecondLine}>
                                    <Text style={styles.subRegular}>Potassium chloride</Text>
                                  </View>
                              
                                  <View style={{flexDirection: 'row'}}>
                                      <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                      <Text style={styles.subRegular}>Hyperkalemia:</Text>
                                  </View>

                                  <View style={styles.subBulletPointSecondLine}>
                                    <Text style={styles.subRegular}>Calcium gluconate</Text>
                                  </View> */}
                          
                                  <View style={styles.flexDirection}>
                                    <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.bold}>H</Text>
                                    <Text style={styles.regular}>ypothermia</Text>
                                  </View>

                                  {/* <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                    <Text style={styles.subRegular}>Active internal </Text>
                                  </View>
                                  <View style={{marginLeft: Dimensions.get('window').width/22}}>
                                    <Text style={styles.subRegular}>rewarming:</Text>
                                  </View>







                                    <View style={{flexDirection: 'row'}}>
                                      <Text style={styles.subBulletPoint}>- </Text>
                                      <Text style={styles.subRegular}>ECMO</Text>
                                    </View>
                                   
                                    <View style={{flexDirection: 'row'}}>
                                      <Text style={styles.subBulletPoint}>- </Text>
                                      <Text style={styles.subRegular}>Warm-water lavage</Text>
                                    </View>
                                    <View style={{marginLeft: Dimensions.get('window').width/20}}>
                                      <Text style={styles.subRegular}>of thoracic cavity</Text>
                                    </View>

                                    <View style={{flexDirection: 'row'}}>
                                      <Text style={styles.subBulletPoint}>- </Text>
                                      <Text style={styles.subRegular}>Warm IV or IO fluids</Text>
                                    </View>

                                    <View style={{flexDirection: 'row'}}>
                                      <Text style={styles.subBulletPoint}>-</Text>
                                      <Text style={styles.subRegular}>Warm, humidified O</Text> 
                                      <Text style={styles.subRegular2}>2</Text> 
                                    </View>


                                   <View style={{flexDirection: 'row'}}>
                                      <Text style={styles.subBulletPoint}>- </Text>
                                      <Text style={styles.subRegular}>Esophageal</Text>
                                   </View>
                                   <View style={{ marginLeft: Dimensions.get('window').width/20 }}>
                                    <Text style={styles.subRegular}>rewarming tubes</Text>
                                   </View> */}
        
                    </View>
                  </View>














                  <View style={{
                    flexWrap: 'wrap', 
                    flex: 1, 
                    // paddingLeft: Dimensions.get('window').width/10, 
                    // paddingRight: Dimensions.get('window').width/20,   
                    // backgroundColor: 'pink',
                  }}>
                        <View style={{
                          flexDirection: 'column', 
                          // backgroundColor: 'green'
                        }}>
                                      
                                        <View style={styles.flexDirection}>
                                            <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                            <Text style={styles.bold}>T</Text>
                                            <Text style={styles.regular}>ension pneumothorax</Text>
                                        </View>
                                     


                                        {/* <View style={{flexDirection: 'row'}}>
                                          <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.subRegular}>Needle & tube</Text>
                                        </View>
                                        <View style={styles.subBulletPointSecondLine}>
                                          <Text style={styles.subRegular}>thoracostomy</Text>
                                        </View> */}



                                        <View style={styles.flexDirection}>
                                          <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.bold}>T</Text>
                                          <Text style={styles.regular}>amponade,</Text>
                                        </View>
                                        <View style={styles.titleBottom}>
                                          <Text style={styles.regular}>cardiac</Text>
                                        </View>

                                        {/* <View style={{flexDirection: 'row'}}>
                                          <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.subRegular}>Bedside ECHO</Text>
                                        </View>
                                        <View style={styles.subBulletPointSecondLine}>
                                          <Text style={styles.subRegular}>at pulse check</Text>
                                        </View>

                                        <View style={{flexDirection: 'row'}}>
                                          <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.subRegular}>Pericardiocentesis</Text>
                                        </View> */}

                                        <View style={styles.flexDirection}>
                                          <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.bold}>T</Text>
                                          <Text style={styles.regular}>oxins</Text>
                                        </View>



                                        <View style={styles.flexDirection}>
                                          <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.bold}>T</Text>
                                          <Text style={styles.regular}>hrombosis,</Text>
                                        </View>
                                        <View style={styles.titleBottom}>
                                          <Text style={styles.regular}>pulmonary</Text>
                                        </View>


                                        {/* <View style={{flexDirection: 'row'}}>
                                          <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.subRegular}>Thrombolysis</Text>
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                          <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.subRegular}>Surgical embolectomy</Text>
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                          <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.subRegular}>Mechanical embolectomy</Text>
                                        </View> */}


                                        <View style={styles.flexDirection}>
                                          <Text style={styles.bulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.bold}>T</Text>
                                          <Text style={styles.regular}>hrombosis,</Text>
                                        </View>
                                        <View style={styles.titleBottom}>
                                          <Text style={styles.regular}>coronary</Text>
                                        </View>

                                        {/* <View style={{flexDirection: 'row'}}>
                                          <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.subRegular}>PCI</Text>
                                        </View>

                                        <View style={{flexDirection: 'row'}}>
                                          <Text style={styles.subBulletPoint}>{`\u2022`}</Text>
                                          <Text style={styles.subRegular}>Thrombolysis</Text>
                                        </View> */}
                        </View>
                  </View>

          </View>
      






 
          {/* <View style={{
            paddingLeft: Dimensions.get('window').width/20, 
            // backgroundColor: 'gray', 
          }}>

                  <Text>
                    <Text style={styles.subBulletPointTwo}>- </Text>
                    <Text style={styles.subRegular}>ECMO</Text>
                  </Text>
                  
                  <Text>
                    <Text style={styles.subBulletPointTwo}>- </Text>
                    <Text style={styles.subRegular}>Warm-water lavage</Text>
                  </Text> 
                  <Text style={styles.subRegular}>of thoracic cavity</Text>

                  <Text>
                    <Text style={styles.subBulletPointTwo}>- </Text>
                    <Text style={styles.subRegular}>Warm IV or IO fluids</Text>
                  </Text> 

                    
                  <View style={{flexDirection: 'row', paddingRight: Dimensions.get('window').width/150,}}>
                    <Text style={styles.subBulletPointThree}>-</Text>
                    <View>
                      <Text style={styles.subRegular}>Warm, humidified O2</Text>
                    </View>
                  </View>

                  <Text>
                    <Text style={styles.subBulletPointTwo}>- </Text>
                    <Text style={styles.subRegular}>Esophageal rewarming tubes</Text>
                  </Text> 
                </View> */}
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bulletPoint: {
    fontSize: Dimensions.get('window').height/52,
  },
  subBulletPoint: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/80,
    marginTop: Dimensions.get('window').height/300,
    marginLeft: Dimensions.get('window').width/40,
    marginRight: Dimensions.get('window').width/150,
    color: '#0031C0',
  },
  subBulletPointTwo: {
    fontWeight: 'bold',
    marginTop: Dimensions.get('window').height/300,
    marginLeft: Dimensions.get('window').width/15,
    marginRight: Dimensions.get('window').width/150,
    color: '#0031C0',
  },
  subBulletPointThree: {
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height/80,
    marginTop: Dimensions.get('window').height/300,
    marginRight: Dimensions.get('window').width/150,
    color: '#0031C0',
  },
  bold: {
    fontWeight: '800',
    fontSize: Dimensions.get('window').width/24,
  }, 
  regular: {
    fontWeight: '400',
    fontSize: Dimensions.get('window').width/24,
  },
  subRegular: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/50,
    color: '#0031C0',
  },
  subRegular2: {
    fontWeight: '300',
    fontSize: Dimensions.get('window').height/70,
    marginTop: Dimensions.get('window').height/120,
    color: '#0031C0',
  },
  titleBottom: {
    marginLeft: Dimensions.get('window').width/45
  },
  subBulletPointSecondLine: {
    marginLeft: Dimensions.get('window').width/22,
  },
  sub: {
    fontWeight: '400',
    color: '#0031C0',
    fontSize: Dimensions.get('window').height/95,
  },
  flexDirection: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height/120,
  }
})



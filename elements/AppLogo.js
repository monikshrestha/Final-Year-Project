import React from 'react'
import { Image } from 'react-native-elements'

const AppLogo = () => (
  <Image
  source={require('../assets/appp.png')}
    style={{ width: 300, height: 90 }}
  />
)

export default AppLogo
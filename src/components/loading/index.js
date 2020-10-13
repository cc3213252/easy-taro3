import React from 'react'
import { View, Image } from '@tarojs/components'
import loading from './assets/loading.gif'
import './index.scss'

export default class Loading extends React.Component {
  render () {
    return (
      <View className='comp-loading'>
        <Image src={loading} className='comp-loading__img' />
      </View>
    )
  }
}


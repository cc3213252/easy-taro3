import Taro from '@tarojs/taro'
import React from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import { Loading } from '@components'
import { connect } from 'react-redux'
import { getWindowHeight } from '@utils/style'
import Recommend from './recommend'
import './home.scss'


@connect(({ recommendList }) => ({
  recommendList,
}))
class Home extends React.Component {
  componentDidMount() {
    this.loadRecommend();
  }

  loadRecommend = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'recommendList/fetch',
    });
  }

  handlePrevent = () => {
    // XXX 时间关系，首页只实现底部推荐商品的点击
    Taro.showToast({
      title: '目前只可点击底部推荐商品',
      icon: 'none'
    })
  }

  render () {
    const { recommend } = this.props
    const {
      recommendList: { recommendList },
    } = this.props;
    const { list=[] } = recommendList;
    return (
      <View className='home'>
        <ScrollView
          scrollY
          className='home__wrap'
          onScrollToLower={this.loadRecommend}
          style={{ height: getWindowHeight() }}
        >
          {/* 为你推荐 */}
          <Recommend list={list} />
        </ScrollView>
      </View>
    )
  }
}

export default Home

import { queryRecommend } from '@services/home/recommend';

const Model = {
  namespace: 'recommendList',
  state: {
    recommendList: {
      list: [],
      lastItemId: 0,
      hasMore: true
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      payload = payload || { lastItemId: 0, size: 20 };
      const res = yield call(queryRecommend, payload);
      if (!res) {
        return;
      }
      console.log("kkkk:", res)
      const datalist = res.data
      const lastItem = datalist.rcmdItemList[datalist.rcmdItemList.length - 1]
      const data = {
        list: datalist.rcmdItemList,
        lastItemId: lastItem && lastItem.id,
        hasMore: datalist.hasMore
      };
      yield put({
        type: 'saveList',
        payload: data,
      });
    },
  },
  reducers: {
    saveList(state, action) {
      return { ...state, recommendList: action.payload };
    },
  },
};
export default Model;

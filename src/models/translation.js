import * as api from '../services/api'

export default {
  namespace: 'translation',
  state: {
    list: null,
    example: []
  },
  reducers: {
    SET_translation(state, { translation1, translation2 }) {
      return {
        ...state,
        translation1,
        translation2
      }
    },
    SET_gtranslation(state, { payload }) {
      return {
        ...state,
        gt: payload
      }
    },
    SET_linggle(state, { payload }) {
      return {
        ...state,
        linggle: payload
      }
    },
  },
  effects: {
    * GET_translation({ payload }, { put, call, select }) {
      try {
        // const data = yield call(api.translate, payload);
        const translate2 = yield call(api.translate2, payload);
        // console.log(data['status'][0][0])
        yield put({
          type: 'SET_translation',
          // translation1: data['status'][0][0],
          translation2: translate2['translation']
        })
      } catch (error) {
        console.log(error)
      }
    },
    * GET_gtranslation({ payload }, { put, call, select }) {
      try {
        const data = yield call(api.gtranslate, payload);
        console.log(data)
        yield put({
          type: 'SET_gtranslation',
          payload: data
        })
      } catch (error) {
        console.log(error)
      }
    },
    * GET_linggle({ payload }, { put, call, select }) {
      try {
        console.log(payload)
        const data = yield call(api.linggle, payload.replaceAll("/", "@"));
        // const data = yield call(api.linggle, payload);
        console.log(data)
        yield put({
          type: 'SET_linggle',
          payload: data
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
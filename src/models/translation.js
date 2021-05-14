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
        const translate2 = yield call(api.translate2, payload);
        yield put({
          type: 'SET_translation',
          translation2: translate2['translation']
        })
      } catch (error) {
        console.log(error)
      }
    },
    * GET_gtranslation({ payload }, { put, call, select }) {
      try {
        const data = yield call(api.gtranslate, payload);
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
        const data = yield call(api.linggle, payload.replaceAll("/", "@"));
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
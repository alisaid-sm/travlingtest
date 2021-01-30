import axios from 'axios'
const API = process.env.VUE_APP_BASE_URL
const config = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
}

const state = () => {
  return {
    all: {
      data: [],
      isLoading: false
    },
    detail: {
      data: [],
      isLoading: false
    }
  }
}

const getters = {
  getAllReview (state) {
    return state.all
  },
  getDetailReview (state) {
    return state.detail
  }
}

const mutations = {
  SET_ALL_DATA (state, payload) {
    state.all.data = payload
  },
  SET_ALL_LOADING (state, payload) {
    state.all.isLoading = payload
  },
  SET_ALL_REVIEW_DETAIL (state, payload) {
    state.detail.data = payload
  }
}

const actions = {
  getAllReview (context, payload) {
    context.commit('SET_ALL_LOADING', true)
    return new Promise((resolve, reject) => {
      axios.get(`${API}/review`)
        .then((response) => {
          context.commit('SET_ALL_DATA', response.data.data)
          resolve(response.data.data)
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => {
          context.commit('SET_ALL_LOADING', false)
        })
    })
  },
  getReviewById (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${API}/review/${payload}`)
        .then((response) => {
          context.commit('SET_ALL_REVIEW_DETAIL', response.data.data)
          resolve(response.data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  addReview (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${API}/review`, payload, config)
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  updateReview (context, payload) {
    return new Promise((resolve, reject) => {
      axios.patch(`${API}/review/${payload.id}`, payload.data)
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  deleteReview (context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`${API}/review/${payload}`)
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

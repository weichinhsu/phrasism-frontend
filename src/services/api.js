import axios from 'axios'

const API = 'http://thor.nlplab.cc:7415/'
// axios.defaults.baseURL = 'http://thor.nlplab.cc:7415/'

export function translate(payload) {
  return axios.get( API + 'translate/' + encodeURIComponent(payload))
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}

export function translate2(payload) {
  return axios.get( API + 'translate2/' + encodeURIComponent(payload))
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}

export function gtranslate(payload) {
  return axios.get( API + 'gtranslate/' + encodeURIComponent(payload))
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}

export function linggle(payload) {
  return axios.get( API + 'linggle/' + encodeURIComponent(payload))
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}
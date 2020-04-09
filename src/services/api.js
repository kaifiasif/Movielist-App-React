import axios from 'axios';
import {apiKey} from '../constants'
import {baseUrl} from '../constants'

export function getUpcoming(number) {
  return axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=${number}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    });
}

export function getPopular(number) {
    return axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${number}`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      });
  }

  export function searchMovie(searchText) {
    return axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      });
  }
  // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
  export function getMovieDetails(id) {
    return axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(responce => {
      return responce
    })
    .catch((error) => {
     return error
   });
   }

   export function getImages(id) {
    return axios.get(`${baseUrl}/movie/${id}/images?api_key=${apiKey}&language=en-US`)
    .then(responce => {
      return responce
    })
    .catch((error) => {
     return error
   });
   }

  //  https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US
import type { characterTypes, dataTypes } from '../types/types'
import axios from 'axios'

export async function fetchResult(characterName?: string) {
  try {
    if (characterName) {
      // console.log('1')
      const response = await axios.get(`https://swapi.dev/api/people/?search=${characterName}`)
      const data: characterTypes = response.data
      console.log(data)
      return data
    } else {
      const response = await axios.get(`https://swapi.dev/api/people/?search=`)
      const data: dataTypes = response.data
      // console.log(data)
      return data
    }
  } catch (error) {
    alert('Ошибка: ' + error)
  }
}

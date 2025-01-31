import type { dataTypes } from '../types/types'
import axios from 'axios'

const baseUrl = 'https://swapi.dev/api/people'

export async function fetchResult(
  characterName?: string,
  page?: string,
): Promise<dataTypes | undefined> {
  try {
    const path = characterName ? `${baseUrl}/?search=${characterName}` : page ? page : baseUrl
    const response = await axios.get(path)
    return response.data
  } catch (error) {
    alert('Ошибка: ' + error)
  }
}

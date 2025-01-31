import type { characterType } from '../types/types'
import axios from 'axios'

const path = 'https://swapi.dev/api/people'

export async function fetchResult(characterName?: string): Promise<characterType[] | undefined> {
  try {
    if (characterName) {
      const response = await axios.get<{ results: characterType[] }>(
        `${path}/?search=${characterName}`,
      )
      return response.data.results
    } else {
      const response = await axios.get<{ results: characterType[] }>(path)
      return response.data.results
    }
  } catch (error) {
    alert('Ошибка: ' + error)
  }
}

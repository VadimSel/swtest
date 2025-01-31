<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchResult } from '../utils/api'
import type { resultsType } from '../types/types'

const fetchResults = ref<resultsType[]>([])

const loadCharacters = async () => {
  const data = await fetchResult()
  if (data) {
    fetchResults.value = data.results
  }
}

onMounted(() => {
  loadCharacters()
})
</script>

<template>
  <div>
    <h1>Список персонажей</h1>
    <ul>
      <li v-for="character in fetchResults" :key="character.name">
        {{ character.name }} - {{ character.birth_year }}
      </li>
    </ul>
    <button @click="loadCharacters">Запрос</button>
  </div>
</template>

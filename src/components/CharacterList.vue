<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { fetchResult } from '../utils/api'
import type { characterType, dataTypes } from '../types/types'

const characterDetails = ref<characterType[]>([])
const fetchResults = ref<dataTypes | null>(null)
const nextPageIsAvilible = ref<string | undefined>()
const prevPageIsAvilible = ref<string | undefined>()

const loadCharacters = async (characterName?: string, page?: string) => {
  const data = await fetchResult(characterName, page)
  if (data) {
    fetchResults.value = data
    characterDetails.value = data.results
    nextPageIsAvilible.value = data.next
    prevPageIsAvilible.value = data.previous
  }
}

function pagination(action: 'next' | 'prev') {
  switch (action) {
    case 'next':
      if (fetchResults.value && fetchResults.value.next) {
        console.log(fetchResults.value.next)
        loadCharacters(undefined, fetchResults.value.next)
        nextPageIsAvilible.value = fetchResults.value.next
      } else {
        nextPageIsAvilible.value = undefined
      }
      break
    case 'prev':
      if (fetchResults.value && fetchResults.value.previous) {
        console.log(fetchResults.value.previous)
        loadCharacters(undefined, fetchResults.value.previous)
        prevPageIsAvilible.value = fetchResults.value.previous
      } else {
        prevPageIsAvilible.value = undefined
      }
      break
    default:
      break
  }
}

onMounted(() => {
  loadCharacters()
})

watch(nextPageIsAvilible, () => {})
</script>

<template>
  <div>
    <h1>Список персонажей</h1>
    <ul>
      <li v-for="character in characterDetails" :key="character.name">
        <router-link
          :to="{ path: `/character/${character.name}` }"
          @click="loadCharacters(character.name)"
        >
          {{ character.name }}
        </router-link>
      </li>
    </ul>
    <button
      :class="{
        'bg-gray-500 cursor-not-allowed': !nextPageIsAvilible,
        'bg-blue-500 border cursor-pointer': nextPageIsAvilible,
      }"
      @click="pagination('next')"
      :disabled="!nextPageIsAvilible"
    >
      Вперёд
    </button>
    <button
      :class="{
        'bg-gray-500 cursor-not-allowed': !prevPageIsAvilible,
        'bg-blue-500 border cursor-pointer': prevPageIsAvilible,
      }"
      @click="pagination('prev')"
      :disabled="!prevPageIsAvilible"
    >
      Назад
    </button>
  </div>
</template>

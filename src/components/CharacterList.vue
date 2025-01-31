<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchResult } from '../utils/api'
import type { characterType } from '../types/types'

const fetchResults = ref<characterType[]>([])

const loadCharacters = async (characterName?: string) => {
  const data = await fetchResult(characterName)
  if (data) {
    fetchResults.value = data
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
        <router-link
          :to="{ path: `/character/${character.name}` }"
          @click="loadCharacters(character.name)"
        >
          {{ character.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { characterType } from '../types/types'
import { fetchResult } from '../utils/api'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const characterName = route.params.name
const characterDetail = ref<characterType>()

const loadCharacterDetails = async () => {
  try {
    const response = await fetchResult(characterName as string)
    if (response) {
      characterDetail.value = response[0]
    }
  } catch (error) {
    alert('Ошибка: ' + error)
  }
}

onMounted(() => {
  loadCharacterDetails()
})

console.log(characterDetail)
</script>

<template>
  <div>
    <ul>
      <li>Имя: {{ characterDetail?.name }}</li>
      <li>Рост: {{ characterDetail?.height }}</li>
      <li>Вес: {{ characterDetail?.mass }}кг</li>
      <li>Цвет волос: {{ characterDetail?.hair_color }}</li>
      <li>Цвет кожи: {{ characterDetail?.skin_color }}</li>
      <li>Цвет глаз: {{ characterDetail?.eye_color }}</li>
      <li>Дата рождения: {{ characterDetail?.birth_year }}</li>
      <li>Пол: {{ characterDetail?.gender }}</li>
    </ul>
  </div>
</template>

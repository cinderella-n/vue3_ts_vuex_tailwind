<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: false,
    default: 'IconHomeSideBar',
  },
  color: {
    type: String,
    required: false,
    default: 'none',
  },
})

const IconComponent = defineAsyncComponent(() => {
  return import(`./icons/${props.icon}.vue`)
})
</script>

<template>
  <KeepAlive>
    <component :is="IconComponent" :class="`stroke-[${color}]`" />
  </KeepAlive>
</template>

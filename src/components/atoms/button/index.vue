<script setup lang="ts">
import { type PropType, type Ref, computed, onUnmounted, ref } from 'vue'
import IconComponent from '@/components/icons/Iconcomponent'
// import { appStore } from '@/shared/stores'
import { Color, Size, Variant, getIcon } from '@/shared/utils/constants'
const props = defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  variant: {
    type: String as PropType<Variant>,
    required: false,
    default: Variant.TEXT,
    validator(value: Variant) {
      return Object.values(Variant).includes(value)
    },
  },
  size: {
    type: String as PropType<Size>,
    required: false,
    default: Size.MEDIUM,
    validator(value: Size) {
      return Object.values(Size).includes(value)
    },
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  color: {
    type: String as PropType<Color>,
    required: false,
    default: Color.PRIMARY,
    validator(value: Color) {
      return Object.values(Color).includes(value)
    },
  },
  iconRight: {
    type: String,
    required: false,
  },
  iconLeft: {
    type: String,
    required: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  delay: {
    type: Number,
    required: false,
    default: 3000,
  },
})

const emit = defineEmits<{
  (e: 'click', status: boolean): boolean
}>()

const icon = computed(() => (props.iconRight || props.iconLeft))
const $appStore = appStore()
const processing: Ref<Boolean> = ref(false)

const buttonClass = computed(() => (
  [
    'md:whitespace-nowrap',
    'inline-flex gap-2 items-center',
    'rounded',
    { 'flex-row-reverse': props.iconLeft },
    { 'py-1 px-2 text-sm': (props.size.toUpperCase() === Size.SMALL) },
    { 'py-2 px-4 text-base': (props.size.toUpperCase() === Size.MEDIUM) },
    { '!p-[6px]': (props.size.toUpperCase() === Size.SMALL && icon.value && !props.label) },
    { '!p-[12px]': (props.size.toUpperCase() === Size.MEDIUM && icon.value && !props.label) },
    { '!p-[20px]': (props.size.toUpperCase() === Size.LARGE && icon.value && !props.label) },
    { 'py-4 px-6 text-base': (props.size.toUpperCase() === Size.LARGE) },
    { 'disabled:text-blue-grey-50': props.disabled && props.variant.toUpperCase() === Variant.TEXT },
    { 'disabled:text-blue-grey-50': props.disabled && props.variant.toUpperCase() === Variant.LABEL },
    (!props.disabled && props.variant.toUpperCase() === Variant.TEXT)
      ? `text-${props.color}-50 hover:underline focus:bg-${props.color}-10 focus:drop-shadow-lg focus:bg-opacity-30`
      : '',
    (!props.disabled && props.variant.toUpperCase() === Variant.LABEL)
      ? `text-${props.color}-50  hover:bg-${props.color}-10 cursor-default focus:bg-${props.color}-10 focus:drop-shadow-lg focus:bg-opacity-30`
      : '',
    { 'disabled:text-blue-grey-50 disabled:border-blue-grey-50 disabled:border disabled:bg-blue-grey-20': props.disabled && props.variant.toUpperCase() === Variant.OUTLINED },
    (!props.disabled && props.variant.toUpperCase() === Variant.OUTLINED)
      ? `border border-${props.color}-50 bg-white text-${props.color}-50 hover:border-white hover:bg-${props.color}-50 hover:text-white hover:shadow-lg`
      : '',
    { 'disabled:text-blue-grey-50 disabled:border-blue-grey-50 disabled:border': props.disabled && props.variant.toUpperCase() === Variant.OUTLINEDWHITE },
    (!props.disabled && props.variant.toUpperCase() === Variant.OUTLINEDWHITE)
      ? `border border-white text-white hover:border-white hover:bg-${props.color}-50 hover:text-white hover:shadow-lg`
      : '',
    { 'disabled:text-blue-grey-50 disabled:border-blue-grey-20 disabled:border disabled:bg-blue-grey-20': props.disabled && props.variant.toUpperCase() === Variant.CONTAINED },
    (!props.disabled && props.variant.toUpperCase() === Variant.CONTAINED)
      ? `border border border-${props.color}-50 bg-${props.color}-50 text-white  hover:shadow-lg`
      : '',
    { 'disabled:text-blue-grey-50 disabled:border-blue-grey-50 disabled:border': props.disabled && props.variant.toUpperCase() === Variant.CONTAINEDWHITE },
    (!props.disabled && props.variant.toUpperCase() === Variant.CONTAINEDWHITE)
      ? `border border-${props.color}-50 bg-white text-${props.color}-50 hover:bg-${props.color}-10 hover:shadow-lg`
      : '',

  ]
))

const IClassIcon = computed(() => (
  [
    { 'flex-row-reverse': props.iconLeft },
    'fill-current',
    { 'h-5 w-5': (props.size.toUpperCase() === Size.SMALL) },
    { 'h-5 w-5': (props.size.toUpperCase() === Size.MEDIUM) },
    { 'h-5 w-5': (props.size.toUpperCase() === Size.LARGE) },
  ]
))

const click = () => {
  // terminate the function
  // if an async request is processing
  if (processing.value === true)
    return

  // set the async state
  processing.value = true
  $appStore.setServiceLoadingFlag(props.loading && processing.value)

  emit('click', true)

  // simulating the async request
  setTimeout(() => {
    // on success or failure
    // reset the state
    processing.value = false
  }, props.delay)
}

onUnmounted(() => {
  // clear process.
  processing.value = false
})
</script>

<template>
  <button :disabled="props.disabled" :class="buttonClass" v-bind="$attrs" @click.stop.prevent="click()">
    <slot>
      <span v-if="label" class="line-clamp-1">
        {{ label }}
      </span>
      <IconComponent v-if="(props.iconRight || props.iconLeft)" :icon="getIcon(props.iconRight || props.iconLeft)" :class="IClassIcon" />
    </slot>
  </button>
</template>

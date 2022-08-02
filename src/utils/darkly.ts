//  暗黑模式

import { ref } from 'vue'

const isDarkly = ref(false)

function darklyFn ():Boolean {
  // eslint-disable-next-line no-return-assign
  return isDarkly.value = !isDarkly.value
}

export {
  isDarkly,
  darklyFn
}

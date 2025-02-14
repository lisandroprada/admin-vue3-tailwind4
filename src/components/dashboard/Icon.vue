<template>
  <component :is="resolveIcon(name)" class="h-6 w-6" />
</template>

<script>
import { DocumentCurrencyEuroIcon } from '@heroicons/vue/20/solid';
import { ChartBarSquareIcon, HomeIcon, HomeModernIcon, TableCellsIcon } from '@heroicons/vue/24/outline';


export default {
  props: {
    name: String
  },
  setup() {
    const resolveIcon = (name) => {
      switch (name) {
        case 'table-cells': return TableCellsIcon
        case 'collection': return HomeModernIcon
        case 'document-duplicate': return DocumentCurrencyEuroIcon
        case 'chart-bar': return ChartBarSquareIcon
      }
    }

    return { resolveIcon }
  }
}
</script>
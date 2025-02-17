<template>
  <div class="rounded-xl overflow-hidden">
    <div class="p-6">
      <slot name="title"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>
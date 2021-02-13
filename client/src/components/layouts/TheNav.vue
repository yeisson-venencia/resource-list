<template>
  <div>
    <base-card v-for="tab in tabs" :key="tab.component">
      <base-button @click="changeTab(tab.component)">
        {{ tab.label }}
      </base-button>
    </base-card>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  emits: ['change-content'],
  methods: {
    changeTab(tab) {
      this.$emit('change-content', tab);
    }
  }
};
</script>

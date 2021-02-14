<template>
  <div>
    <base-card>
      <base-button
        v-for="tab in tabs"
        :key="tab.component"
        @click="changeTab(tab.component)"
        :mode="tab.component === currentTab ? null : 'flat'"
      >
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
    },
    currentTab: {
      type: String,
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

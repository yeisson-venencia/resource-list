<template>
  <div>
    <content-title>List of Resources</content-title>
    <ul>
      <resource-panel-item
        v-for="res in storedResources"
        :key="res.id"
        :id="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
      ></resource-panel-item>
    </ul>
  </div>
</template>

<script>
import ResourcePanelItem from './ResourcePanelItem';

export default {
  components: { ResourcePanelItem },
  inject: ['storedResources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>

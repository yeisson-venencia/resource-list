<template>
  <div>
    <header>
      <h1>List of Resources</h1>
    </header>
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
  props: {
    storedResources: {
      type: Array,
      required: true
    }
  }
};
</script>

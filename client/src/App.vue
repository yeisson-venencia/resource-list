<template>
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
</template>

<script>
import ResourcePanelItem from './components/ResorcePanelItem';

export default {
  components: { ResourcePanelItem },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'the oficial VueJS documentation',
          link: 'htt://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google..',
          link: 'htt://google.com'
        }
      ]
    };
  }
};
</script>

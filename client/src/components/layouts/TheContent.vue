<template>
  <keep-alive>
    <component :is="contentId" :storedResources="storedResources"></component>
  </keep-alive>
  <!-- <div>
    <resource-panel :storedResources="storedResources"></resource-panel>
  </div> -->
</template>

<script>
import ResourcePanel from '../resource-panel/ResourcePanel';
import AddResource from '../resource-form/AddResource';

export default {
  components: { ResourcePanel, AddResource },
  props: {
    contentId: { type: String, required: true }
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'the oficial VueJS documentation',
          link: 'http://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google..',
          link: 'http://google.com'
        }
      ]
    };
  }
};
</script>

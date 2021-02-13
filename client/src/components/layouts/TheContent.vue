<template>
  <div>
    <resource-panel :storedResources="storedResources"></resource-panel>
  </div>
</template>

<script>
import ResourcePanel from '../resource-panel/ResourcePanel';
export default {
  components: { ResourcePanel },
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

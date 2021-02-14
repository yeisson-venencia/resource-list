<template>
  <keep-alive>
    <component :is="contentId"></component>
  </keep-alive>
</template>

<script>
import ResourcePanel from '../resource-panel/ResourcePanel';
import AddResource from '../resource-form/AddResource';

export default {
  components: { ResourcePanel, AddResource },
  props: {
    contentId: { type: String, required: true }
  },
  emits: ['resource-added'],
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
  },
  methods: {
    addResource(title, description, link) {
      const id = new Date().toISOString();
      this.storedResources.unshift({
        id,
        title,
        description,
        link
      });
      this.$emit('resource-added', 'resource-panel');
    },
    deleteResource(resourceId) {
      const resourceIndex = this.storedResources.findIndex(
        res => res.id === resourceId
      );
      this.storedResources.splice(resourceIndex, 1);
    }
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  }
};
</script>

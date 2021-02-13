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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

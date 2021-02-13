<template>
  <div>
    <the-header title="Resource Manager"></the-header>
    <the-nav></the-nav>
    <resource-panel :storedResources="storedResources"></resource-panel>
  </div>
</template>

<script>
import ResourcePanel from './components/resource-panel/ResourcePanel';
import TheHeader from './components/layouts/TheHeader';
import TheNav from './components/layouts/TheNav';

export default {
  components: { ResourcePanel, TheHeader, TheNav },
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

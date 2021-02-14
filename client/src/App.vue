<template>
  <div>
    <the-header title="Resource Manager"></the-header>
    <the-nav
      :tabs="tabs"
      @change-content="changeContent"
      :currentTab="selectedContent"
    ></the-nav>
    <the-content
      :contentId="selectedContent"
      @resource-added="changeContent"
    ></the-content>
  </div>
</template>

<script>
import TheContent from './components/layouts/TheContent';
import TheHeader from './components/layouts/TheHeader';
import TheNav from './components/layouts/TheNav';

export default {
  components: { TheContent, TheHeader, TheNav },
  data() {
    return {
      tabs: [
        { component: 'resource-panel', label: 'Resource List' },
        { component: 'add-resource', label: 'Add Resource' }
      ],
      selectedContent: 'resource-panel'
    };
  },
  methods: {
    changeContent(content) {
      this.selectedContent = content;
    }
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

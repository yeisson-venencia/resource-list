<template>
  <div>
    <the-header title="Resource Manager"></the-header>
    <the-nav :tabs="tabs"></the-nav>
    <the-content></the-content>
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

<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button @click="deleteResource">Delete</button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">Go to resource...</a>
    </nav>
  </li>
</template>

<script>
export default {
  emits: ['delete-resource'],
  props: {
    title: { type: String, required: true },
    id: { id: Object, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
  },
  methods: {
    deleteResource() {
      this.$emit('delete-resource', this.id);
    }
  }
};
</script>

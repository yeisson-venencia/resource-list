<template>
  <li>
    <div>
      <header>
        <h3></h3>
        <button>Delete</button>
      </header>
    </div>
    <p></p>
    <nav>
      <a href="">Go to resource...</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    id: { id: Object, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
  }
};
</script>

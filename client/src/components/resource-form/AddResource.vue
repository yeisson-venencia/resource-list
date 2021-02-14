<template>
  <div>
    <content-title>Add Resource</content-title>
    <base-card>
      <form action="" @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" ref="titleInput" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            ref="descriptionInput"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input type="url" id="link" name="link" ref="linkInput" />
        </div>
        <div>
          <base-button type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  inject: ['addResource'],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value.trim();
      const enteredDescription = this.$refs.descriptionInput.value.trim();
      const enteredLink = this.$refs.linkInput.value.trim();

      if (enteredTitle && enteredDescription && enteredLink) {
        this.cleanForm();
        this.addResource(enteredTitle, enteredDescription, enteredLink);
      } else {
        alert('Infor mala');
      }
    },
    cleanForm() {
      this.$refs.titleInput.value = '';
      this.$refs.descriptionInput.value = '';
      this.$refs.linkInput.value = '';
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

form {
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>

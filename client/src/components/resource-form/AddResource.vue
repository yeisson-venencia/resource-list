<template>
  <div>
    <content-title>Add Resource</content-title>
    <base-dialog v-if="isInputInvalid" title="Invalid Input">
      <template #default>
        <p>Unfortunately, at least one input value is invalid</p>
        <p>
          Please check all inputs and make sure you enter at least one character
          per input field.
        </p>
      </template>
      <template #actions>
        <base-button @click="confirmError">Ok</base-button>
      </template>
    </base-dialog>
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
  data() {
    return {
      isInputInvalid: false
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value.trim();
      const enteredDescription = this.$refs.descriptionInput.value.trim();
      const enteredLink = this.$refs.linkInput.value.trim();

      if (enteredTitle && enteredDescription && enteredLink) {
        this.cleanForm();
        this.addResource(enteredTitle, enteredDescription, enteredLink);
      } else {
        this.isInputInvalid = true;
      }
    },
    cleanForm() {
      this.$refs.titleInput.value = '';
      this.$refs.descriptionInput.value = '';
      this.$refs.linkInput.value = '';
    },
    confirmError() {
      this.isInputInvalid = false;
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

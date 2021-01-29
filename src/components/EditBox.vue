<template>
    <div id="edit-box" class="hide">
        <div class="edit-container">
            <div class="form-edit">
                <h3>Edit</h3>
                <Form />
                <v-icon name="times" class="close-icon" @click="close()" />
            </div>
        </div>
    </div>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
  components: {
    Form
  },
  methods: {
    close () {
      const element = document.getElementById('edit-box')
      element.classList.toggle('show')
    }
  }
}
</script>

<style>
#edit-box {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
}
.edit-container {
    display: flex;
    align-self: center;
    justify-content: center;
}
.form-edit {
    position: relative;
    background: white;
    width: 70%;
    padding: 10px;
    margin-top: 30%;
}
.form-edit .close-icon {
    position: absolute;
    top: 1px;
    right: 1px;
    cursor: pointer;
}
</style>

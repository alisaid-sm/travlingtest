<template>
  <div class="home">
    <div class="app-container shadow">
      <Form />
      <ReviewList />
      <EditBox />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'
import ReviewList from '@/components/ReviewList.vue'
import EditBox from '@/components/EditBox.vue'
export default {
  name: 'Home',
  components: {
    Form,
    ReviewList,
    EditBox
  }
}
</script>

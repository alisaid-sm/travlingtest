<template>
    <div id="edit-box" class="hide">
        <div class="edit-container">
            <div class="form-edit">
                <div class="app-form">
                <div class="app-form-header-update">
                    <h3 class="title">Edit Review</h3>
                    <button @click="dataIn" class="app-btn bg-form-default">Masukkan data sebelumnya</button>
                    <div class="star">
                        <a @click="reviewStar(1)" @mouseover="styleStar(1)" @mouseout="styleStar(ustarfix == 1? 1 : 0)">
                            <v-icon name="star" :class="ustar >= 1? 'clr-star-gold' : 'clr-star-default'"/>
                        </a>
                        <a @click="reviewStar(2)" @mouseover="styleStar(2)" @mouseout="styleStar(ustarfix == 2? 2 : 0)">
                            <v-icon name="star" :class="ustar >= 2? 'clr-star-gold' : 'clr-star-default'"/>
                        </a>
                        <a @click="reviewStar(3)" @mouseover="styleStar(3)" @mouseout="styleStar(ustarfix == 3? 3 : 0)">
                            <v-icon name="star" :class="ustar >= 3? 'clr-star-gold' : 'clr-star-default'"/>
                        </a>
                        <a @click="reviewStar(4)" @mouseover="styleStar(4)" @mouseout="styleStar(ustarfix == 4? 4 : 0)">
                            <v-icon name="star" :class="ustar >= 4? 'clr-star-gold' : 'clr-star-default'"/>
                        </a>
                        <a @click="reviewStar(5)" @mouseover="styleStar(5)" @mouseout="styleStar(ustarfix == 5? 5 : 0)">
                            <v-icon name="star" :class="ustar >= 5? 'clr-star-gold' : 'clr-star-default'"/>
                        </a>
                    </div>
                </div>
                <div class="app-form-body">
                    <form @submit.prevent="updateReview" enctype='multipart/form-data'>
                        <div class="form-group">
                            <input v-model="formUpdate.name" type="text" class="form-control" placeholder="Tulis Nama Kamu">
                        </div>
                        <div class="form-group">
                            <textarea v-model="formUpdate.review_comment" class="form-control" rows="3" placeholder="Tulis Review Terbaik mu"></textarea>
                        </div>
                        <div class="button-cont">
                            <label for="file-upload-up" class="app-btn bg-form-default mr-auto">
                                Upload Gambar
                            </label>
                            <input @change="prosesFile" id="file-upload-up" ref="fileUpdateReview" type="file" multiple/>
                            <button type="submit" class="app-btn bg-form-default btn-right">Kirim</button>
                            <p>{{ formUpdate.images.length == 1? formUpdate.images[0].name : `${formUpdate.images.length} files selected`}}</p>
                        </div>
                    </form>
                </div>
            </div>
                <v-icon name="times" class="close-icon" @click="close()" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      ustar: 0,
      ustarfix: 0,
      formUpdate: {
        name: null,
        review_comment: null,
        review_star: 0,
        images: []
      }
    }
  },
  components: {
  },
  computed: {
    ...mapGetters({
      detailReview: 'review/getDetailReview'
    })
  },
  methods: {
    styleStar (id) {
      this.ustar = id
    },
    reviewStar (id) {
      this.ustarfix = id
      this.formUpdate.review_star = id
    },
    close () {
      const element = document.getElementById('edit-box')
      element.classList.toggle('show')
      this.formUpdate.name = null
      this.formUpdate.review_comment = null
      this.formUpdate.review_star = 0
      this.ustar = 0
      this.ustarfix = 0
      this.formUpdate.images = []
    },
    prosesFile (event) {
      this.formUpdate.images = event.target.files
    },
    dataIn () {
      this.formUpdate.name = this.detailReview.data.name
      this.formUpdate.review_comment = this.detailReview.data.review_comment
      this.formUpdate.review_star = this.detailReview.data.review_star
      this.ustar = this.detailReview.data.review_star
      this.ustarfix = this.detailReview.data.review_star
    },
    updateReview (form) {
      const submit = {
        id: this.detailReview.data._id,
        data: new FormData()
      }
      submit.data.append('name', this.formUpdate.name)
      submit.data.append('review_comment', this.formUpdate.review_comment)
      submit.data.append('review_star', this.formUpdate.review_star)
      for (let i = 0; i < this.formUpdate.images.length; i++) {
        submit.data.append('images', this.formUpdate.images[i])
      }
      this.actionUpdateReview(submit)
        .then((result) => {
          console.log(result)
          this.close()
          this.actionGetALLReview()
          this.$toast.success('Review Updated.', {
            position: 'bottom'
          })
        })
        .catch((err) => {
          console.log(err)
          this.$toast.error(`${err.message}`, {
            position: 'bottom'
          })
        })
    },
    ...mapActions({
      actionUpdateReview: 'review/updateReview',
      actionGetALLReview: 'review/getAllReview'
    })
  },
  mounted () {
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
.app-form-header-update {
    text-align: center;
}
</style>

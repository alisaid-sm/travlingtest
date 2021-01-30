<template>
<div class="app-review-list">
    <div v-if="allReview.isLoading == true" class="loading">
        <v-icon class="mt-5" name="spinner" scale="3" pulse></v-icon>
    </div>
    <div v-else class="card-review" v-for="(item, index) in allReview.data" :key="index">
        <img @click="reviewMenu(index, item._id)" class="card-review-toggle" width="30px" draggable="false" src="../assets/img/three-dots-svgrepo-com.svg" alt="">
        <div class="card-review-menu hide">
            <a @click="editBox(item._id)">edit</a>
            <a @click="deleteReview(item._id)">delete</a>
        </div>
        <div class="card-review-img">
            <img src="../assets/img/default.jpg" width="45px" alt="">
        </div>
        <div class="card-review-body">
            <span class="font-weight-bold">{{ item.name }}</span>
            <span>{{ dateFormatIndo(item.created_at, item.updated_at) }}</span>
            <div class="review-star" v-for="n in 5" :key="n + Math.random()">
                <a v-if="n > item.review_star">
                    <v-icon name="star" class="clr-star-default"/>
                </a>
                <a v-else>
                    <v-icon name="star" class="clr-star-gold"/>
                </a>
            </div>
            <div class="review-text">
                <p>{{ item.review_comment }}</p>
            </div>
            <div class="review-img" v-for="(a, i) in item.image" :key="i">
                <img :src="`data:image/png;base64,${a.b64}`" width="115px" height="59px" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      editData: null
    }
  },
  computed: {
    ...mapGetters({
      allReview: 'review/getAllReview'
    })
  },
  methods: {
    reviewMenu (index, id) {
      const element = document.getElementsByClassName('card-review-menu')
      element[index].classList.toggle('show')
      this.actionGetDetailReview(id)
        .then((result) => {
          this.editData = result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editBox (id) {
      const element = document.getElementById('edit-box')
      element.classList.toggle('show')
      if (this.editData == null) {
        this.actionGetDetailReview(id)
          .then((result) => {
            this.editData = result
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    deleteReview (id) {
      this.actionDeleteReview(id)
        .then((result) => {
          this.actionGetALLReview()
          this.$toast.default('Review Deleted.', {
            position: 'bottom'
          })
        })
        .catch((err) => {
          console.log(err.message)
          this.$toast.error(`${err.message}`, {
            position: 'bottom'
          })
        })
    },
    dateFormatIndo (date, update) {
      const dateSet = !update ? date : update
      const bulanIndo = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
      const dateShort = dateSet.slice(0, 10).split('-').reverse()
      dateShort[1] = bulanIndo[Number(dateShort[1])]
      return dateShort.join(' ')
    },
    ...mapActions({
      actionGetALLReview: 'review/getAllReview',
      actionDeleteReview: 'review/deleteReview',
      actionGetDetailReview: 'review/getReviewById'
    })
  },
  mounted () {
    this.actionGetALLReview()
  }
}
</script>

<style>
.app-review-list {
    height: 100vh;
    overflow: auto;
    margin-top: 10px;
}
.card-review {
    background: #F5F1F1;
    border-radius: 5px;
    display: flex;
    padding: 10px;
    position: relative;
    margin-bottom: 10px;
}
.card-review-img {
    margin-right: 10px;
}
.card-review-img img {
    border-radius: 100%;
}
.card-review-body {
    font-size: 14px;
    line-height: 16px;
}
.card-review-body span {
    display: block;
    margin-bottom: 3px;
}
.review-star {
    margin-bottom: 10px;
    display: inline-block;
}
.review-img {
    display: contents;
}
.review-img img{
    margin-right: 5px;
    margin-bottom: 5px;
}
.card-review-toggle {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
}
.card-review-menu {
    position: absolute;
    width: 105px;
    height: 58px;
    background: #C4C4C4;
    border-radius: 20px 0px 20px 20px;
    padding: 7px;
    right: 20px;
    top: 30px;
}
.card-review-menu a {
    display: block;
    cursor: pointer;
}
.card-review-menu a:hover {
   font-weight: bold;
}
.loading {
    text-align: center;
}
</style>

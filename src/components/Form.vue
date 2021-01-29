<template>
              <div class="app-form">
                <div class="app-form-header">
                    <span class="title">Review</span>
                    <div class="star">
                        <a @click="reviewStar(1)" @mouseover="styleStar(1)" @mouseout="styleStar(starfix == 1? 1 : 0)">
                            <v-icon name="star" :class="star >= 1? 'clr-star-gold' : 'clr-star-default'"/>
                        </a>
                        <a @click="reviewStar(2)" @mouseover="styleStar(2)" @mouseout="styleStar(starfix == 2? 2 : 0)">
                            <v-icon name="star" :class="star >= 2? 'clr-star-gold' : 'clr-star-default'"/>
                        </a>
                        <a @click="reviewStar(3)" @mouseover="styleStar(3)" @mouseout="styleStar(starfix == 3? 3 : 0)">
                            <v-icon name="star" :class="star >= 3? 'clr-star-gold' : 'clr-star-default'"/>
                        </a>
                        <a @click="reviewStar(4)" @mouseover="styleStar(4)" @mouseout="styleStar(starfix == 4? 4 : 0)">
                            <v-icon name="star" :class="star >= 4? 'clr-star-gold' : 'clr-star-default'"/>
                        </a>
                        <a @click="reviewStar(5)" @mouseover="styleStar(5)" @mouseout="styleStar(starfix == 5? 5 : 0)">
                            <v-icon name="star" :class="star >= 5? 'clr-star-gold' : 'clr-star-default'"/>
                        </a>
                    </div>
                </div>
                <div class="app-form-body">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Tulis Nama Kamu">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="3" placeholder="Tulis Review Terbaik mu"></textarea>
                        </div>
                        <div class="button-cont">
                            <label for="file-upload" class="app-btn bg-form-default mr-auto">
                                Upload Gambar
                            </label>
                            <input id="file-upload" type="file"/>
                            <a type="submit" class="app-btn bg-form-default btn-right">Kirim</a>
                        </div>
                    </form>
                </div>
            </div>
</template>

<script>
export default {
  data () {
    return {
      star: 0,
      starfix: 0
    }
  },
  methods: {
    styleStar (id) {
      this.star = id
    },
    reviewStar (id) {
      this.starfix = id
    }
  },
  mounted () {
  }
}
</script>

<style>
.app-form {
    border-bottom: 1px solid #c4c4c4;
}
.app-form-header {
    display: flex;
    align-items: center;
}
.title {
    font-size: 48px;
    line-height: 56px;
}
.star {
    margin-left: auto;
}
.star a {
    cursor: pointer;
}
.app-form-body {
    margin-top: 20px;
    margin-bottom: 20px;
}
.button-cont {
    position: relative;
}
.btn-right {
    position: absolute;
    right: 0;
}
</style>

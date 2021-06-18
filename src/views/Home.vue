<template>
  <section>
      <div class="hero">
        <div class="hero-row">
            <div class="hero-lead">
                <h1>Mau makan apa hari ini?</h1>
            </div>
            <div class="hero-image">
                <img class="hero-img" src="@/assets/images/hero.png" alt="Hero Image">
            </div>
        </div>
      </div>
      <div class="popular-title">
        <h1>Popular Food</h1>
      </div>
      <div class="popular-food">
        <div v-for="food in foods" :key="food.id">
             <img class="food-img" :src="food.img" alt="Bakso Image">
             <h3>{{food.name}}</h3>
             <h4>Harga : Rp. {{food.price}}</h4>
             <button @click="selectFoodById(food)" class="btn-checkout">Pesan</button>
        </div>
      </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Home',
    computed: {
        ...mapState(['foods'])
    },
    methods: {
       ...mapActions(['selectFoodById'])
    }
}
</script>

<style lang="scss" scoped>
    .hero {
        padding: 80px 80px;
        h1 {
            font-size: 50px;
        }

        .hero-row {
            display: flex;
            justify-content: space-between;
            place-items: center;
        }

        .hero-img {
            width: 700px;
        }
    }

    .popular-title {
        padding: 0 110px;
    }

    .popular-food {
        display: flex;
        justify-content: space-evenly;

        .food-img {
            width: 300px;
            height: 180px;
            border-radius: 10px;
        }

        .btn-checkout {
            background-color: yellow;
            border: 0;
            border-radius: 10px;
            padding: 8px 20px;
            cursor: pointer;
        }
    }
</style>
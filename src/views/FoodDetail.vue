<template>
    <section>
        <div class="row-link">
            <ul class="link-ul">
                <li>
                    <router-link class="link" to="/">Home /</router-link>
                </li>
                <li>
                    <router-link class="link" to="/foods">Foods / </router-link>
                </li>
                <li class="active">Food Order</li>
            </ul>
        </div>
        <div class="food-detail">
            <div class="food-row" v-for="food in getFoodOrder" :key="food.id">
                <img class="food-img" :src="food.img" alt="Bakso Image">
                <div class="order-detail">
                    <h2>{{food.name}}</h2>
                    <hr style="width:200px;">
                    <h4>Harga : Rp. {{food.price}}</h4>
                    <div class="order-input">
                        <label class="my-1" for="order_quantity">Jumlah Pesanan</label>
                        <input class="rounded border-2" type="number" v-model="order.order_quantity">
                    </div>
                    <div class="order-input">
                        <label class="my-1" for="keterangan">Keterangan</label>
                        <textarea class="rounded border-2" cols="23" rows="2" placeholder="Keterangan (contoh : pedas , nasi double)" v-model="order.information"></textarea>
                    </div>
                    <button class="btn-order" type="submit" @click="handleOrder">Pesan</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'FoodDetail',
    data: () => ({     
        order: {
            order_quantity : '',
            information : ''
        }
    }),
    computed: {
        ...mapGetters(['getFoodOrder']),
    },
    methods: {
        handleOrder() {
            this.order.food = this.getFoodOrder
            this.$store.dispatch('setOrder', this.order);
        }
    }
}
</script>

<style lang="scss" scoped>
    .row-link {
        padding: 0 40px;
        .link-ul {
            display: inline-flex;
            list-style: none;

            .link {
                color: black;
                text-decoration: none;
            }

            .active {
                font-weight: 500;
            }
        }
    }
    .food-detail {
        padding: 10px 80px;

        .food-row {
            display: flex;
            flex-direction: row;

            .order-detail {
                margin-left: 20px;
                
                .order-input {
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;
                }

                .btn-order {
                    background-color: yellow;
                    border: 0;
                    border-radius: 10px;
                    padding: 8px 20px;
                    cursor: pointer;
                    margin-top: 10px;
                }
            }

            .food-img {
                width: 400px;
                border-radius: 4px;
            }
        }
    }
</style>
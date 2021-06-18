<template>
    <section>
        <div class="">
            <table class="">
                <thead>
                    <tr class="border-b-2">
                        <th class="w-40">#</th>
                        <th class="w-32">Gambar</th>
                        <th class="w-40">Makanan</th>
                        <th class="w-32">Keterangan</th>
                        <th class="w-32">Jumlah</th>
                        <th class="w-32">Harga</th>
                        <th class="w-32">Total</th>
                        <th class="w-32">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="" v-for="(food, index) in getFoodCart" :key="food.id">
                        <th class="">{{ index+1 }}</th>
                        <td class="">
                            <img :src="food.food[index].img" class="img-food" alt="">
                        </td>
                        <td class="">{{food.food[index].name}}</td>
                        <td class="">{{food.information}}</td>
                        <td class="">{{food.order_quantity}}</td>
                        <td class="">Rp. {{food.food[index].price}}</td>
                        <td class="">Rp. {{food.food[index].price * food.order_quantity}}</td>
                        <td class="">
                            <button @click="deleteCart(food.id)" class="rounded-xl py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wide text-white bg-green-400 w-auto">Hapus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {{province}}
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios'
const key = "10399d4fada203229ad27a8e8a8b4506";

export default {
    name: 'FoodCart',
    data: () => ({
        province: []
    }),
    computed: {
        ...mapGetters(['getFoodCart']),
    },
    methods: {
        deleteCart(id) {
            this.$store.dispatch('deleteCart', id)
        },
        async getProvince() {
            try {
                let response = await axios.get('https://api.rajaongkir.com/starter/province',{
                    headers :{
                    'key' : key,
                    }
                });
                this.province = response.data
            } catch(error) {
                console.log(error)
            } 
        }
    }
}
</script>
<style lang="scss" scoped>
.img-food {
    width: 200px;
}
</style>
<template>
    <nav>
        <div class="nav-row">
            <span class="nav-title">Kulinerin</span>
            <div class="nav-link">
                <router-link to="/" class="link">Home</router-link>
                <router-link to="/food-cart" class="link">Keranjang</router-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    .nav-row {
        display: flex;
        justify-content: space-between;
        padding: 40px 80px;
        place-items: center;

        .nav-title {
            font-size: 24px;
            font-weight: 500;
        }

        .nav-link {
            .link {
                padding: 0 10px;
                text-decoration: none;
                color: black;
            }
        }
    }
</style>
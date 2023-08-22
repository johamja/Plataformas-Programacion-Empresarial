<script>
    import { page } from '$app/stores';
    import shop_logo from '$lib/icons/shop.png'
</script>

<header>
    <div>
        <a aria-current={$page.url.pathname === '/' ? 'page' : undefined} href="/"><h4 class="Home">Inicio</h4></a>
        <a aria-current={$page.url.pathname === '/information' ? 'page' : undefined} href="/information"><h4 class="Information">Información</h4></a>
    </div>

    <div>
        <a aria-current={$page.url.pathname === '/shop' ? 'page' : undefined} href="/shop"><h4 class="Shop">Tienda</h4></a>
        <img height="35" width="35" alt="shop_icon" src="{shop_logo}">
    </div>
</header>


<style>

    a[aria-current='page']{
        font-size: large;
        color: var(--color-A);
    }

    h4{
        margin: 10px;
    }
    header {
        display: flex;
        justify-content: space-around;
        padding-left: var(--padding-page);
        padding-right: var(--padding-page);
        align-items: center;
    }

    div {
        display: flex;
    }

    a {
        margin: 10px;
        text-decoration: none;
        color: var(--color-text);
    }

    img {
        margin: 10px;
    }

</style>
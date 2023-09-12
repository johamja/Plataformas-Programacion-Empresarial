<script>
    import {page} from '$app/stores';
    import shop_logo from '$lib/icons/shop.png'

    $: rute = $page.url.pathname.toString()
</script>

{#if rute === '/login' || rute === '/login/register'}
    <header class="header">
        <nav class="menu">
            <ul>
                <li class="home"><a href="/">PanYucando</a></li>
                {#if rute === '/login/register'}
                    <li class="login"><a href="/login">Volver a inicio de sesión</a></li>
                {/if}
            </ul>
        </nav>
    </header>
    <style>
        .header {
            top: 20px;
            left: 20px;
            position: fixed;
            z-index: 2;
            display: flex;
            width: 100%;
            flex-direction: row;
            height: max-content;

            & .menu {
                & ul {
                    margin: 0;
                    padding: 0;

                    & li {
                        float: left;
                        list-style-type: none;
                        margin-right: 40px;

                        & a {
                            text-decoration: none;
                            color: var(--color-B);
                            text-align: center;
                            font-family: Inter, serif;
                            font-size: 20px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: normal;
                        }
                    }
                }
            }
        }
    </style>
{:else}
    <header class="header">
        <div>
            <a aria-current={rute === '/' ? 'page' : undefined} href="/">
                <h4 class="Home">Inicio</h4>
            </a>
            <a aria-current={rute === '/information' ? 'page' : undefined} href="/information">
                <h4 class="Information">Información</h4>
            </a>
        </div>
        <div>
            <a href="/login">
                <h4>Log in</h4>
            </a>
            <a aria-current={rute === '/shop' ? 'page' : undefined} href="/shop">
                <h4 class="Shop">Tienda</h4>
            </a>
            <a aria-current={rute === '/shop/shopping-cart' ? 'page' : undefined} href="/shop/shopping-cart">
                <img alt="shop_icon" src="{shop_logo}">
            </a>
        </div>
    </header>

    <style>
        .header {
            display: flex;
            justify-content: space-around;
            padding-left: var(--padding-page);
            padding-right: var(--padding-page);
            align-items: center;

            & div {
                display: flex;

                & a[aria-current='page'] {
                    font-size: large;
                    color: var(--color-A);
                }

                & a {
                    margin: 10px;
                    text-decoration: none;
                    color: var(--color-text);
                }
            }

            & img {
                margin: 10px;
                height: 35px;
                width: 35px;
            }

            & h4 {
                margin: 10px;
            }
        }
    </style>
{/if}


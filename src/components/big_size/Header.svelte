<script>
    //Librerias necesarias
    import {page} from "$app/stores";
    // recursos
    import profile from '$lib/icons/header/profile.png';
    import profile_color_a from '$lib/icons/header/profile_color_a.png';
    import shoppingcart from '$lib/icons/header/shoppingcart.png';
    import shoppingcart_color_a from '$lib/icons/header/shoppingcart_color_a.png';

    $: rute = $page.url.pathname.toString()
</script>

<!--Componenete para el apartado del login y registro-->
{#if rute === '/login' || rute === '/login/register'}
    <header class="header">
        <nav>
            <a href="/">
                <h3>Panyucando</h3>
            </a>
            <a href="/login" aria-current={rute === '/login' ? 'page' : undefined}>
                <h4>Inicio de secion</h4>
            </a>
            <a href="/login/register" aria-current={rute === '/login/register' ? 'page' : undefined}>
                <h4>Registro</h4>
            </a>
        </nav>
    </header>

    <style>
        .header {
            & nav {
                display: flex;
                align-items: center;
                gap: 40px;

                & a {
                    text-decoration: none;
                    color: var(--color-text);
                }

                & a[aria-current='page'] {
                    color: var(--color-B);
                    transition: 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
                }
            }
        }
    </style>
    <!--Componente para la version global-->
{:else}
    <header class="header">
        <div class="container">
            <nav>
                <a aria-current={rute === '/' ? 'page' : undefined} href="/">
                    <h4 class="Home">Inicio</h4>
                </a>
                <a aria-current={rute === '/information' ? 'page' : undefined} href="/information">
                    <h4 class="Información">Información</h4>
                </a>
                <a aria-current={rute === '/shop' ? 'page' : undefined} href="/shop">
                    <h4 class="Shop">Tienda</h4>
                </a>
            </nav>
            <nav>
                <a href="/shop/shopping-cart">
                    <img aria-current="{rute === '/shop/shopping-cart' ? 'page' : undefined}" alt="shop_icon"
                         src="{rute === '/shop/shopping-cart' ? shoppingcart_color_a : shoppingcart}">
                </a>
                <a href="/login/profile">
                    <img aria-current="{rute === '/login/profile' ? 'page' : undefined}" alt="profile_icon"
                         src="{rute === '/login/profile' ? profile_color_a : profile}">
                </a>
            </nav>
        </div>
    </header>

    <style>
        .header {
            display: flex;
            justify-content: center;
            margin-top: 20px;

            & .container {
                display: flex;
                justify-content: space-between;
                width: var(--tamaño_de_contenedor);

                & nav {
                    display: flex;
                    align-items: center;
                    gap: 40px;

                    & a[aria-current='page'] {
                        color: var(--color-A);
                        transition: 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
                    }

                    & img[aria-current='page'] {
                        filter: grayscale(50%);
                        transition: 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
                    }

                    & a {
                        text-decoration: none;
                        color: var(--color-text);
                    }

                    & img {
                        height: 25px;
                        width: 25px;
                        margin: 0;
                        filter: grayscale(100%);
                    }
                }
            }
        }
    </style>
{/if}
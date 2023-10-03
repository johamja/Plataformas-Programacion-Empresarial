<script>
    import MediaQuery from 'svelte-media-query'

    import Space from '../../../components/design/space.svelte'
    import {page} from "$app/stores";

    $: rute = $page.url.pathname.toString()
</script>

<!--Desktop-->
<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <div class="app" style="display: contents">
            <main style="display: contents">
                <Space/>
                <header class="header_layout container_flex">
                    <nav>
                        <a aria-current={rute === '/shop/shopping-cart' ? 'page' : undefined}
                           href="/shop/shopping-cart">
                            <h4>Carrito de compra</h4>
                        </a>
                        <a aria-current={rute === '/shop/shopping-cart/purchasing-process' ? 'page' : undefined}
                           href="/shop/shopping-cart/purchasing-process">
                            <h4>Proceso de compra</h4>
                        </a>
                    </nav>
                </header>
                <slot/>
            </main>
        </div>
        <style>
            .header_layout {
                & nav {
                    display: flex;
                    gap: 24px;

                    & a[aria-current='page'] {
                        color: var(--color-A);
                        transition: 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
                    }

                    & a {
                        text-decoration: none;
                        color: var(--color-text);
                    }
                }
            }
        </style>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            tablet
        </div>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            teléfono
        </div>
    {/if}
</MediaQuery>
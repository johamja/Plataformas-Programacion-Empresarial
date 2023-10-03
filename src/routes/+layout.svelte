<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import '../styles/styles.css'
    import '../styles/colors.css'
    import '../styles/measures.css'
    import '../styles/desing.css'
    import {page} from "$app/stores";

    $: rute = $page.url.pathname.toString()
</script>

<div class="app" style="display: contents">

    {#if rute !== '/login'}
        {#if rute !== '/login/register' }
            {#if rute !== '/login/administrator'}
                {#if rute !== '/login/administrator/products'}
                    {#if rute !== '/login/administrator/shopping'}
                        <Header/>
                    {/if}
                {/if}
            {/if}
        {/if}
    {/if}

    <main style="display: contents">
        <slot/>
    </main>

    {#if rute !== '/login'}
        {#if rute !== '/login/register' }
            {#if rute !== '/login/administrator'}
                {#if rute !== '/login/administrator/products'}
                    {#if rute !== '/login/administrator/shopping'}
                        <Footer/>
                    {/if}
                {/if}
            {/if}
        {/if}
    {/if}

</div>
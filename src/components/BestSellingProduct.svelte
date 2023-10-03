<script>
    import MediaQuery from 'svelte-media-query'
    import BestSellingProduct_Big_Size from './big_size/BestSellingProduct.svelte'

    export let src = ""
    export let name = ""
    export let description = ""

</script>

<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <BestSellingProduct_Big_Size src="{src}" name="{name}" description="{description}"/>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            No disponible
        </div>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            No disponible
        </div>
    {/if}
</MediaQuery>
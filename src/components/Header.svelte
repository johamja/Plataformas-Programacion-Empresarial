<script>
    import MediaQuery from 'svelte-media-query'
    import Header_Big_Size from "./big_size/Header.svelte";
</script>

<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <Header_Big_Size/>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            Header no disponible
        </div>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            Header no disponible
        </div>
    {/if}
</MediaQuery>
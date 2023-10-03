<script>
    import MediaQuery from 'svelte-media-query'
    import NotableFeature_Big_Size from './big_size/NotableFeature.svelte';

    export let Characteristic = ""
    export let Description = ""
</script>

<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <NotableFeature_Big_Size Characteristic="{Characteristic}" Description="{Description}"/>
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
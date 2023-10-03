<script>
    import MediaQuery from 'svelte-media-query'
    import CardInformation_Big_Size from "./big_size/CardInformation.svelte";

    export let src = ""
    export let title = ""
    export let description = ""
</script>

<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <CardInformation_Big_Size src="{src}" title="{title}" description="{description}"/>
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
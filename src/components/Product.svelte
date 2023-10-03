<script>

    import Shop from "./big_size/product/Shop.svelte";
    import ShoppingCart from "./big_size/product/ShoppingCart.svelte";
    import Bill from "./big_size/product/Bill.svelte";
    import CRUD from "./big_size/product/CRUD.svelte"

    export let Variant = ""
    export let Item = ""
    export let Function = () => {
    }

</script>

{#if (Variant === 'home')}
    <Shop Item="{Item}"/>
{:else if (Variant === 'shop')}
    <Shop Item="{Item}"/>
{:else if (Variant === 'CRUD')}
    <CRUD Item="{Item}"/>
{:else if (Variant === 'shopping cart')}
    <ShoppingCart Item="{Item}"/>
{:else if (Variant === 'bill')}
    <Bill Item="{Item}"/>
{:else }
    <p>Default</p>
{/if}
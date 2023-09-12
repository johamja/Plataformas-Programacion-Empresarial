<script>

    import Input_Variant1 from "./input/Input_Variant1.svelte";
    import Input_Variant2 from "./input/Input_Variant2.svelte";
    import Input_Variant3 from "./input/Input_Variant3.svelte";

    export let Tag
    export let Variant

    let tag = Tag.toString()
    let variant = Variant.toString()
</script>

{#if (variant === "Variant1")}
    <Input_Variant1 Tag="{tag}"/>
{:else if (variant === "Variant2")}
    <Input_Variant2 Tag="{tag}"/>
{:else if (variant === "Variant3")}
    <Input_Variant3 Tag="{tag}"/>
{/if}

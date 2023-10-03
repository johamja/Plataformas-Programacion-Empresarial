<script>

    import Input_Variant1 from "./big_size/input/Input_Variant1.svelte";
    import Input_Variant2 from "./big_size/input/Input_Variant2.svelte";
    import Input_Variant3 from "./big_size/input/Input_Variant3.svelte";

    export let variant = "Variant1"
    export let Label = ""
    export let Type = ""
    export let Name = ""
    export let Value = ""

</script>

{#if (variant === "Variant1")}
    <Input_Variant1 Label="{Label}" Type="{Type}" Name="{Name}"/>
{:else if (variant === "Variant2")}
    <Input_Variant2 Label="{Label}" Type="{Type}" Name="{Name}"/>
{:else if (variant === "Variant3")}
    <Input_Variant3 Label="{Label}" Type="{Type}" Name="{Name}" Value="{Value}"/>
{:else }
    <label>
        {Label}
        <input name="{Name}" type="{Type}">
    </label>
{/if}

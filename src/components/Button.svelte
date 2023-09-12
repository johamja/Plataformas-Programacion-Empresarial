<script>

    import Button_Variant1 from "./button/Button_Variant1.svelte";
    import Button_Variant2 from "./button/Button_Variant2.svelte";
    import Button_Variant3 from "./button/Button_Variant3.svelte";
    import Button_Variant4 from "./button/Button_Variant4.svelte";
    import Button_Variant5 from "./button/Button_Variant5.svelte";
    import Button_Variant6 from "./button/Button_Variant6.svelte";
    import Button_Variant7_Google from "./button/Button_Variant7_Google.svelte";

    export let Text
    export let Variant
    export let Function
    export const img = ""
    let text = Text.toString()
    let variant = Variant.toString()
    let action_function = Function



</script>

{#if (variant === 'Variant1')}
    <Button_Variant1 Function="{action_function}" Text="{text}"/>
{:else if (variant === 'Variant2')}
    <Button_Variant2 Text="{text}"/>
{:else if (variant === 'Variant3')}
    <Button_Variant3 Text="{text}"/>
{:else if (variant === 'Variant4')}
    <Button_Variant4 Text="{text}"/>
{:else if (variant === 'Variant5')}
    <Button_Variant5 Text="{text}"/>
{:else if (variant === 'Variant6')}
    <Button_Variant6 Text="{text}"/>
{:else if (variant === 'Variant7')}
    <Button_Variant7_Google Text="{text}"/>
{:else }
    <button>default</button>
{/if}

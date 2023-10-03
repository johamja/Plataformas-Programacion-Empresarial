<script>

    import Button_Variant1 from "./big_size/button/Button_Variant1.svelte";
    import Button_Variant2 from "./big_size/button/Button_Variant2.svelte";
    import Button_Variant3 from "./big_size/button/Button_Variant3.svelte";
    import Button_Variant4 from "./big_size/button/Button_Variant4.svelte";
    import Platform from "./big_size/button/Platform.svelte";

    export let Text = ""
    export let Variant = ""
    export const Img = ""
    export let Function = () => {
    }
    export let Type = "button"
    export let SocialNetwork = ""

</script>

<!-- Botones simples -->
{#if (Variant === 'Variant1')}
    <Button_Variant1 Text="{Text}" Type="{Type}" Function="{Function}"/>
{:else if (Variant === 'Variant2')}
    <Button_Variant2 Text="{Text}" Type="{Type}" Function="{Function}"/>
    <!-- Botones de plataformas -->
{:else if (Variant === 'Variant3')}
    <Button_Variant3 Text="{Text}" Type="{Type}"/>

    <!-- Botones de redes sociales  -->
{:else if (Variant === 'Variant4')}
    <Button_Variant4 SocialNetwork="{SocialNetwork}"/>
{:else if (Variant === 'platform')}
    <Platform Type="{Type}"/>
{:else}
    <p>Default</p>
{/if}

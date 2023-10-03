<script>
    export let Text = ""
    export let Type = "button"
    export let Function = () => {
    }
</script>

<button class="button" on:click={Function} type="{Type}">
    {Text}
</button>

<style>
    .button {
        height: var(--alto_botones);
        width: var(--ancho_botones);
        border-radius: 10px;
        background-color: var(--color-B);
        color: var(--color-A);
        border-block-start: none;
        border-block-end: none;
        border-inline-end: none;
        border-inline-start: none;
        box-shadow: var(--sombra);
        padding: 15px;
        text-align: center;
        font-family: Inter, serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
</style>
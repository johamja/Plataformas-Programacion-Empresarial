<script>
    export let Type = "button"
    import google from '$lib/icons/Google.svg'
</script>

<button class="button" type="{Type}">
    <img src="{google}">
    Continue with Google
</button>

<style>
    .button {
        display: flex;
        gap: 15px;
        align-items: center;
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
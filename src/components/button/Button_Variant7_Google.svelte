<script>
    import logo_google from '$lib/icons/Google.svg'
    export let Text
    export let Function
    let text = Text.toString()
    let action = Function
</script>

<button on:click={action} class="button">
    <img src="{logo_google}" alt="logo_google">
    {text}
</button>

<style>
    .button{
        border-radius: 10px;
        background-color: var(--color-B);
        padding: 0 20px 0 20px;
        height: 54px;
        color: var(--color-A);
        border-block-start: none;
        border-block-end: none;
        border-inline-end: none;
        border-inline-start: none;
        box-shadow: var(--sombra);
        margin: 15px;
        text-align: center;
        font-family: Courgette,serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        align-items: center;
        justify-content: center;
        & img{
            height: 24px;
            width: 24px;
            margin-right: 15px;
        }
    }
</style>
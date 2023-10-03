<script>
    export let src = ""
    export let title = ""
    export let description = ""
</script>

<div class="CardInformation">
    <div class="container_1">
        <div class="img">
            <img alt="" src="{src}">
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
</div>

<style>

    .CardInformation {
        width: var(--tamaño_de_columna);
        border-radius: var(--redondeo_elementos);
        background-color: var(--color-C);

        & .container_1 {
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 24px;
            color: var(--color-text);

            & .img {
                height: 36px;
                width: 36px;
                padding: 17px;
                border-radius: var(--redondeo_elementos);
                background-color: var(--color-A);

                & img {
                    height: inherit;
                }
            }

            & p {
                text-align: justify;
            }
        }
    }
</style>
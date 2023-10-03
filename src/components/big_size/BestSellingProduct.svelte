<script>
    export let src = "";
    export let name = "";
    export let description = "";
</script>

<div class="BestSellingProduct">
    <div class="container_1">
        <img alt="img product {name}" src={src.toString()}>
    </div>
    <h2>{name}</h2>
    <p>{description}</p>
</div>

<style>
    .BestSellingProduct {
        display: flex;
        width: var(--tamaño_de_columna);
        flex-direction: column;
        align-items: center;
        gap: 24px;

        & .container_1 {
            display: flex;
            justify-content: center;
            width: inherit;
            height: 200px;

            & img {
                height: inherit;
            }
        }

        & p {
            text-align: justify;
        }
    }
</style>
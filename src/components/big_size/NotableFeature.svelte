<script>
    export let Characteristic = ""
    export let Description = ""
</script>

<div class="cont_comp_des">
    <h2 class="degradado_A">{Characteristic}</h2>
    <p>{Description}</p>
</div>

<style>
    .cont_comp_des {
        width: var(--tamaño_de_columna);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        & p {
            text-align: justify;
        }
    }
</style>
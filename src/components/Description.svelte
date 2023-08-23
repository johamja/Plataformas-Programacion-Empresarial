<script>
    export let Characteristic
    let characteristic = Characteristic.toString()

    export let Description
    let description = Description.toString()

    // export let Color
    // let color = Color.toString()
</script>

<div class="cont_comp_des">
    <h2 class="title_characteristic">{characteristic}</h2>
    <p class="text_description">{description}</p>
</div>

<style>
    .cont_comp_des{
        width: 18%;
    }
    .title_characteristic{
        font-weight: normal;
        font-size: 40px;
        text-align: center;
        background: -webkit-linear-gradient(left top, var(--color-A), var(--color-text));
        background: linear-gradient(to bottom right, var(--color-A), var(--color-text));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .text_description{
        font-weight: normal;
        font-size: 15px;
        text-align: justify;
    }
</style>
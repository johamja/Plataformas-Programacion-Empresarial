<script>
    import Product from "../components/Product.svelte";
    import Description from "../components/Description.svelte";
    import front_page from "$lib/img/home/front_page.png"
    import left_cover from "$lib/img/home/left_cover.png"
    import right_cover from "$lib/img/home/right_cover.png"
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Description" />
</svelte:head>

<div class="cont_1">
    <div class="img_por_lef"><img src="{left_cover}" alt=""></div>
    <div class="img_por_rig"><img src="{right_cover}" alt=""></div>
    <div class="img_por">
        <img  src="{front_page}" alt="front_page">
    </div>
    <div class="text_por">
        <h1>Panyucando</h1>
        <h3>Sabor Auténtico en Cada Creación</h3>
    </div>
</div>

<div>
    <h2>Productos</h2>
    <div>
        <Product/>
        <Product/>
        <Product/>
    </div>
</div>

<div>
    <h2>Nosotros te ofrecemos</h2>
    <div id="conteiner">
        <Description/>
        <Description/>
        <Description/>
        <Description/>
        <Description/>
        <Description/>
    </div>
</div>

<div>
    <h2>¿Cómo comprar?</h2>
</div>

<style>
    .cont_1{
        display: grid;
        grid-template-columns: repeat(2,auto);
        grid-template-rows: repeat(3,auto);
        & .text_por {
            grid-column: 1 / -1;
            grid-row: 2;
            text-align: center;
        }
        & .img_por{
            grid-column: 1 / -1;
            grid-row: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            & img{ width: 30%
                ;
            padding: 50px}
        }
        & .img_por_lef, .img_por_rig{
            display: flex;
            align-items: center;
            & img{
                width: 55%;
            }
        }
        & .img_por_lef{
            grid-column: 1;
            grid-row: 1 / 3;
            justify-content: left;
        }
        & .img_por_rig{
            grid-column: 2;
            grid-row: 1 / 3;
            justify-content: right;
        }

        & h1{
            font-size: 96px;
            margin: 0px;
        }

        & h1, & h3 {
            font-weight: normal;
        }
    }
</style>
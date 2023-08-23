<script>
    import Product from "../components/Product.svelte"
    import Description from "../components/Description.svelte"
    import Space from "../components/design/space.svelte"
    import front_page from "$lib/img/home/front_page.png"
    import left_cover from "$lib/img/home/left_cover.png"
    import right_cover from "$lib/img/home/right_cover.png"
    import left_cover_2 from "$lib/img/home/left_cover_2.png"
    import right_cover_2 from "$lib/img/home/right_cover_2.png"

    // images from products
    import prod_1 from "$lib/img/product/prod_1.png"
    import prod_2 from "$lib/img/product/prod_2.png"
    import prod_3 from "$lib/img/product/prod_3.png"
</script>

<svelte:head>
    <title>Home</title>
    <meta content="Description" name="description"/>
</svelte:head>

<div class="cont_1">
    <div class="img_por_lef"><img alt="" src="{left_cover}"></div>
    <div class="img_por_rig"><img alt="" src="{right_cover}"></div>
    <div class="img_por">
        <img alt="front_page" src="{front_page}">
    </div>
    <div class="text_por">
        <h1>Panyucando</h1>
        <h3>Sabor Auténtico en Cada Creación</h3>
    </div>
</div>

<Space/>

<div class="cont_2">
    <h2>Productos</h2>
    <div class="cont_products">
        <Product Description="Descubre la magia del pan de yuca. Cada bocado es una explosión de sabor y textura:
        crujiente por fuera, suave por dentro. Libre de gluten y amado en todo el mundo, es la elección perfecta
        para tus antojos. ¿Listo para un viaje culinario inolvidable? ¡Pruébalo hoy!"
                 Name="Pan de yuca"
                 img="{prod_1}"/>

        <Product Description="¡Sumérgete en el placer celestial de nuestra torta exquisita!
        Nuestra torta es una obra maestra de la repostería, cuidadosamente elaborada con los ingredientes más finos
         y un toque de amor. Cada rebanada es un viaje de sabor que te transportará a un mundo de dulzura y deleite.
          Disfruta de la decadencia en su máxima expresión. ¡Ordénala hoy y deja que nuestros sabores te conquisten!"
                 Name="Torta"
                 img="{prod_2}"/>

        <Product Description="¡Deléitate con la simplicidad y la dulzura irresistible de nuestro exquisito bizcocho!
        Nuestro bizcocho es un verdadero placer para los sentidos. Con su textura esponjosa y su sabor delicadamente
        dulce, cada bocado es una experiencia única. Perfecto para cualquier ocasión, desde el desayuno hasta el postre.
        ¿Estás listo para probar la perfección en forma de bizcocho? ¡Haz tu pedido ahora y descubre un mundo de sabor
        y suavidad en cada rebanada!"
                 Name="Biscocho"
                 img="{prod_3}"/>
    </div>
</div>

<Space/>

<div class="cont_3">
    <div class="img_cont_3_lef"><img alt="" src="{left_cover_2}"></div>
    <div class="img_cont_3_rig"><img alt="" src="{right_cover_2}"></div>
    <h2 class="title_cont">Nosotros te ofrecemos</h2>
    <div class="conteiner_1">
        <Description Characteristic="Calidad Artesanal" Description="En nuestra panadería, cada creación es una obra maestra artesanal. Cada pan, cada pastel, se elabora con amor y dedicación" />
        <Description Characteristic="Ingredientes Frescos" Description="Nuestro secreto radica en la frescura de nuestros ingredientes. Utilizamos solo los más frescos y naturales para llevar hasta tu mesa la mejor calidad "/>
        <Description Characteristic="Variedad de Productos" Description="En nuestra panadería, la variedad es nuestra especialidad. Desde panes tradicionales hasta pasteles exquisitos, tenemos algo para todos "/>
    </div>
    <div class="conteiner_2">
        <Description Characteristic="Tradición Familiar" Description="Enraizados en una tradición familiar, nuestra panadería lleva décadas brindando sabor y calidez a la comunidad. ¡Únete a nuestra familia de clientes satisfechos!"/>
        <Description Characteristic="Salud y Nutrición" Description="Tu salud es importante para nosotros. Ofrecemos opciones más saludables, como pan integral y sin gluten, para satisfacer tus necesidades nutricionales."/>
        <Description Characteristic="Experiencia del Chef" Description="Nuestro chef pastelero, con años de experiencia, pone su corazón y alma en cada creación. Descubre el toque especial que solo él puede ofrecer."/>
    </div>
</div>

<Space/>

<div>
    <h2>¿Cómo comprar?</h2>
</div>

<style>
    .cont_1 {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(3, auto);

        & .text_por {
            grid-column: 1 / -1;
            grid-row: 2;
            text-align: center;
        }

        & .img_por {
            grid-column: 1 / -1;
            grid-row: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            & img {
                width: 30%;
                padding: 50px
            }
        }

        & .img_por_lef, .img_por_rig {
            display: flex;
            align-items: center;

            & img {
                width: 55%;
            }
        }

        & .img_por_lef {
            grid-column: 1;
            grid-row: 1 / 3;
            justify-content: left;
        }

        & .img_por_rig {
            grid-column: 2;
            grid-row: 1 / 3;
            justify-content: right;
        }

        & h1 {
            font-size: 96px;
            margin: 0;
        }

        & h1, & h3 {
            font-weight: normal;
        }
    }

    .cont_2{
        display: flex;
        flex-direction: column;
        align-items: center;

        & .cont_products{
            display: flex;
            justify-content: space-evenly;
        }

        & h2{
            font-size: 40px;
            font-weight: normal;
            margin: 10px ;
        }
    }

    .cont_3{
        display: grid;
        grid-template-columns: repeat(2,auto);
        grid-template-rows: repeat(3,auto);

        & .title_cont{
            grid-column: 1/-1;
            grid-row: 1;
            text-align: center;
            margin: 10px;
            font-size: 40px;
            font-weight: normal;
        }
        & .img_cont_3_lef{
            display: flex;
            grid-column: 1;
            grid-row: 1/-1;
            justify-content: left;
            align-items: flex-start;

            & img{
                width: 37%;
            }
        }
        & .img_cont_3_rig{
            display: flex;
            grid-column: 2;
            grid-row: 1/-1;
            justify-content: right;
            align-items: flex-start;
            & img{
                width: 25%;
            }
        }

        & .conteiner_1{
            display: flex;
            grid-column: 1/-1;
            grid-row: 2;
            justify-content: space-evenly;

        }
        & .conteiner_2{
            display: flex;
            grid-column: 1/-1;
            grid-row: 3;
            justify-content: space-evenly;
        }
    }

</style>
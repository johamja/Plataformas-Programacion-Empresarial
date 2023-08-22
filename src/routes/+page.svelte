<script>
    import Product from "../components/Product.svelte";
    import Description from "../components/Description.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Description" />
</svelte:head>

<div>
    <h1>Panyucando</h1>
    <h3>Sabor Auténtico en Cada Creación</h3>
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

<script>
    export let img
    let src = img.toString()
    export let Name
    let name = Name.toString()
    export let Description
    let description = Description.toString()
</script>

<div>
    <img src="{src}" alt="img_product">
    <h2>{name}</h2>
    <p>{description}</p>
</div>

<style>
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 15%;
    }
 img{
     --tamaño: 80%;
     width: var(--tamaño);
 }
 h2, p{
    font-weight: normal;
 }
 h2{
     text-align: center;
 }
 p{
     text-align: justify;
 }
</style>
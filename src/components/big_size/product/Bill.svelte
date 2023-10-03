<script>
    export let Item

    let img = Item.img
    let name = Item.name
    let price = Item.price
    let subtotal = Item.subtotal
    let count = Item.count

</script>

<div class="Bill">
    <div class="img">
        <img alt="" src="{img}">
    </div>
    <div class="box">
        <p>{name}</p>
        <h4>$ {price}</h4>
    </div>
    <div class="box">
        <p>Cantidad: {count}</p>
    </div>
    <div class="box">
        <p>Subtotal: {subtotal}</p>
    </div>
</div>

<style>
    .Bill {
        width: inherit;
        display: flex;
        justify-content: space-between;
        padding: 15px;
        align-items: center;

        & .img {
            height: 50px;
            width: 50px;

            & img {
                height: inherit;
            }
        }

        & div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
        }

        & .box {
            width: 250px;
        }
    }
</style>
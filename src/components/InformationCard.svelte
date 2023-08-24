<script>
    export let Number
    let number = Number.toString()

    export let Image
    let img = Image.toString()

    export let Title
    let title = Title.toString()

    export let Description
    let description = Description.toString()
</script>

<div class="cont_comp_info_card">
    <div class="cont_1">
        <h1>{number}</h1>
        <img src="{img}" alt="">
    </div>
    <div class="cont_2">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
</div>

<style>

    .cont_comp_info_card{
        width: 23%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-A);
        box-shadow: black;
        padding: 15px;

        & .cont_1{
            display: flex;
            justify-content: center;
            align-items: center;
            & h1 {
                font-weight: normal;
                font-size: 96px;
            }
            & img{
                width: 60px;
                margin: 10px;
            }
        }
        & .cont_2{
            display: flex;
            justify-content: center;
            flex-direction: column;
            & h2{
                font-weight: normal;
                font-size: 32px;
                margin: 5px;
            }
            & p{
                font-weight: normal;
                font-size: 15px;
            }
        }
        & h1, & h2, & p{
            color: var(--color-B);
        }
    }
</style>
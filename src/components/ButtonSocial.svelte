<script>
    export let Tipo

    let tipo = Tipo.toString()

    let data = [
        {name: "facebook", img: "src/lib/icons/facebook_2.png", text: "Facebook", color: '#1877f2', link:"https://www.facebook.com/"},
        {name: "instagram", img: "src/lib/icons/instagram_2.png", text: "Instagram", color: '#F00073', link:"https://www.instagram.com/"},
        {name: "whatsapp", img: "src/lib/icons/whatsapp_2.png", text: "Whatsapp", color: '#25D366', link:"https://www.whatsapp.com/"}
    ]

</script>

<a href="{data[parseInt(tipo)].link}">
    <div style="--color:{data[parseInt(tipo)].color}">
        <link>
        <img alt="{data[parseInt(tipo)].name}" src={data[parseInt(tipo)].img}>
        <h2>{data[parseInt(tipo)].text}</h2>
    </div>
</a>


<style>
    a {
        text-decoration: none;
        width: 25%;
    }

    div {
        display: flex;
        flex-direction: row;
        background-color: var(--color);
        align-items: center;
        height: 50px;
        padding: 0 20px 0 20px;
        border-radius: 25px;
    }

    img {
        height: 32px;
        width: 32px;
        margin-right: 20%;
    }

    h2 {
        font-size: 20px;
        font-weight: normal;
        color: var(--color-B);
        margin: 0;
    }
</style>
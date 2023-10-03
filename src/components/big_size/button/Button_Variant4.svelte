<script>
    export let SocialNetwork = ""

    let text = ""
    let src = ""
    let link = ''

    if (SocialNetwork === 'facebook') {
        text = 'facebook'
        src = 'src/lib/icons/facebook_2.png'
        link = 'https://www.facebook.com/'
    } else if (SocialNetwork === 'instagram') {
        text = 'instagram'
        src = 'src/lib/icons/instagram_2.png'
        link = 'https://www.instagram.com/'
    } else if (SocialNetwork === 'whatsapp') {
        text = 'whatsapp'
        src = 'src/lib/icons/whatsapp_2.png'
        link = 'https://www.whatsapp.com/'
    }
</script>

<a href="{link}">
    <img alt="{text}" src="{src}">
    <h4>{text}</h4>
</a>

<style>
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        width: var(--tamaño_de_columna);
        height: var(--alto_botones);
        text-decoration: none;
        color: var(--color-B);
        background-color: var(--color-A);
        border-radius: var(--redondeo_elementos);

        & img {
            height: 24px;
            width: 24px;
        }
    }
</style>
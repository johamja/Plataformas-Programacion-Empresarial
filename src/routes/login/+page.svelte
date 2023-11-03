<script>
    import MediaQuery from "svelte-media-query";
    import Input from "../../components/Input.svelte";
    import img_log_in from "$lib/login/log_in.png";
    import Button from "../../components/Button.svelte";
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/big_size/Footer.svelte";

    const Login = {
        components: {
            MediaQuery,
            Input,
            Button,
            Header,
            Footer,
        },
        name: "Login",
    };
</script>

<svelte:head>
    <title>Log in</title>
    <meta content="Description" name="description" />
</svelte:head>

<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <div class="container">
            <div class="container_1">
                <Header />
                <div class="container_1_1">
                    <h1 class="title">Inicio de sesión</h1>
                    <form action="?/authentication" method="post">
                        <Input
                            Label="Correo"
                            Name="correo"
                            variant="Variant1"
                        />
                        <Input
                            Label="Contraseña"
                            Name="contraseña"
                            variant="Variant1"
                        />
                        <Button
                            Type="submit"
                            Text="Iniciar"
                            Variant="Variant1"
                        />
                        <p>
                            Aun no estas registrado realízalo dando en registro
                        </p>
                        <Button Variant="platform" />
                    </form>
                </div>
                <Footer />
            </div>
            <div class="container_2">
                <img alt="img" src={img_log_in} />
            </div>
        </div>

        <style>
            .container {
                height: 100%;
                display: flex;
                justify-content: space-evenly;
                flex-direction: row;
                background: rgb(119, 101, 227);
                background: linear-gradient(
                    90deg,
                    rgba(119, 101, 227, 1) 0%,
                    rgba(255, 255, 255, 1) 100%
                );

                & .container_1 {
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    & .container_1_1 {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        align-items: center;
                        color: var(--color-B);

                        & form {
                            display: flex;
                            flex-direction: column;
                            gap: 24px;
                            align-items: center;
                        }
                    }
                }

                & .container_2 {
                    display: flex;
                    align-items: flex-end;

                    & img {
                        height: 700px;
                    }
                }
            }
        </style>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">Header no disponible</div>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">Header no disponible</div>
    {/if}
</MediaQuery>

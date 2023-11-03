<script>
    import MediaQuery from "svelte-media-query";
    import Input from "../../../components/Input.svelte";
    import img_log_in from "$lib/login/log_in.png";
    import Button from "../../../components/Button.svelte";
    import Header from "../../../components/Header.svelte";
    import Footer from "../../../components/big_size/Footer.svelte";

    const Register = {
        components: {
            MediaQuery,
            Input,
            Button,
            Header,
            Footer,
        },
        name: "Register",
    };
    let responseMessage = ""; // Variable para almacenar la respuesta del servidor

    async function register() {
        window.location.href = "/login";
    }
</script>

<svelte:head>
    <title>Register</title>
    <meta content="Description" name="description" />
</svelte:head>

<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <div class="container">
            <div class="container_1">
                <Header />
                <div class="container_1_1">
                    <h1 class="title">Registrarme</h1>
                    <form action="?/not_authenticated" method="post">
                        <Input
                            Name="Nombre"
                            Label="Nombre"
                            variant="Variant1"
                        />
                        <Input
                            Name="Apellido"
                            Label="Apellido"
                            variant="Variant1"
                        />
                        <Input
                            Name="Correo"
                            Label="Correo"
                            variant="Variant1"
                            Type="text"
                        />
                        <Input
                            Name="Contraseña"
                            Label="Contraseña"
                            variant="Variant1"
                            Type="text"
                        />
                        <Button
                            Type="submit"
                            Text="Registrarme"
                            Variant="Variant1"
                            on:click={register}
                        />
                        <p>
                            También puedes registrarte usado una de estas
                            opciones
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

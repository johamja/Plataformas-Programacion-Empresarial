<script>
    import Input from "../../../components/Input.svelte";
    import img_log_in from '$lib/login/log_in.png'
    import Button from "../../../components/Button.svelte";

    function register() {
        // navigate("/login/register");
        window.location.href = '/login/register';
    }
</script>

<svelte:head>
    <title>Register</title>
    <meta content="Description" name="description"/>
</svelte:head>

<div class="container">
    <div class="container_1">
        <div class="container_1_1">
            <form action="" method="post">
                <h1 class="title">Registro</h1>
                <Input Tag="Nombre" Variant="Variant1"/>
                <Input Tag="Apellido" Variant="Variant1"/>
                <Input Tag="Correo" Variant="Variant1"/>
                <Input Tag="Contraseña" Variant="Variant1"/>
                <Button Function={() => {console.log('Continue con google')}} Text="Continúe con Google" Variant="Variant7"/>
                <Button Function={register} Text="Registrarme" Variant="Variant1"/>
            </form>

        </div>
    </div>
    <div class="container_2">
        <img alt="" src="{img_log_in}">
    </div>
</div>

<style>
    .container {
        z-index: 1;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        background: rgb(119, 101, 227);
        background: linear-gradient(90deg, rgba(119, 101, 227, 1) 0%, rgba(255, 255, 255, 1) 100%);
        height: 100%;

        & .container_1 {
            margin-left: var(--padding-page);
            display: flex;
            align-items: center;
            width: 100%;

            & .container_1_1 {
                display: flex;
                flex-direction: column;
                width: 67%;

                & form {
                    display: flex;
                    flex-direction: column;

                    & .title {
                        color: var(--color-B);
                        font-size: 40px;
                        font-style: normal;
                        font-weight: 400;
                    }
                }
            }

        }

        & .container_2 {
            display: flex;
            align-items: flex-end;

            & img {
                height: 95%;
            }
        }
    }
</style>
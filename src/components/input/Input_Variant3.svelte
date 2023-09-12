<script>
    import './global_style.css'

    export let Tag
    let tag = Tag.toString()
</script>

<label class="Container_in">
    <p>{tag.toString()}</p>
    <input id="name" name="Nombre" type="text">
</label>
<style>
    .Container_in {
        & p {
            color: var(--color-text);
        }

        & input {
            background-color: var(--color-C);
        }
    }
</style>
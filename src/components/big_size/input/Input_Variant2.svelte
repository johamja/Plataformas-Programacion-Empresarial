<script>
    import './global_style.css'

    export let Label = ""
    export let Type = ""
    export let Name = ""
</script>

<label class="Container_in">
    <p>{Label}</p>
    <input name="{Name}" type="{Type}">
</label>
<style>
    .Container_in {
        & p {
            color: var(--color-text);
        }

        & input {
            background-color: var(--color-B);
        }
    }
</style>
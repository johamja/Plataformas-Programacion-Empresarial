<script>
    export let Number = 0
    export let Text = ""
</script>

<div class="StepToFollow">
    <div class="container_1_component">
        <h2>{Number}</h2>
        <h2>{Text}</h2>
    </div>
    <div class="line"></div>
</div>

<style>
    .StepToFollow {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 24px;

        & .container_1_component {
            display: flex;
            gap: 24px;
        }

        & .line {
            width: inherit;
            height: 3px;
            background-color: var(--color-A);
        }
    }
</style>
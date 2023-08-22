<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import './styles.css'
    import '../styles/color.css'
    import '../styles/measures.css'
</script>

<div class="app">

    <Header />

    <main>
        <slot />
    </main>

    <Footer />

</div>

<style>
    main{
        padding-left: var(--padding-page);
        padding-right: var(--padding-page);
    }
</style>
<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import './styles.css'
    import '../styles/color.css'
    import '../styles/measures.css'
</script>

<div class="app" style="height: 100%">

    <Header />

    <main style="height: 100%">
        <slot />
    </main>

    <Footer />

</div>

<style>

</style>
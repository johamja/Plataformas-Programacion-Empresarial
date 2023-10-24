<script>
    
    import MediaQuery from 'svelte-media-query'

    import Space from "../components/design/space.svelte"
    import BestSellingProduct from "../components/BestSellingProduct.svelte"
    import NotableFeature from "../components/NotableFeature.svelte";
    import CardInformation from "../components/CardInformation.svelte"

    import front_page from "$lib/img/home/front_page.png"
    import left_cover from "$lib/img/home/left_cover.png"
    import right_cover from "$lib/img/home/right_cover.png"
    import left_cover_2 from "$lib/img/home/left_cover_2.png"
    import right_cover_2 from "$lib/img/home/right_cover_2.png"

    import {List_BestSellingProduct} from './List_BestSellingProduct.js'
    import {List_NotableFeature} from './List_NotableFeature.js'
    import {List_Information} from './List_Information.js'
    const Home =  {
    components: {
      MediaQuery,
      Space,
      BestSellingProduct,
      NotableFeature,
      CardInformation
    },
    // Rename the component to HomePage
    name: 'Home'
  }
   
   
</script>

<svelte:head>
    <title>Home</title>
    <meta content="Description" name="description"/>
</svelte:head>

<!--Desktop-->
<MediaQuery let:matches query="(min-width: 1440px)">
    {#if matches}
        <Space/>

        <div class="container_1">
            <div class="container_1_1">
                <img alt="image_of_a_wheat_1" src="{left_cover}">
            </div>
            <div class="container_1_2">
                <img alt="front_page" src="{front_page}">
                <h1>Panyucando</h1>
                <h3>Sabor Auténtico en Cada Creación</h3>
            </div>
            <div class="container_1_3">
                <img alt="image_of_a_wheat_2" src="{right_cover}">
            </div>
        </div>

        <Space/>

        <div class="container_2 container_flex">
            <div class="container_2_1">
                <h2>Productos</h2>
                <div class="list_container">
                    {#each List_BestSellingProduct as item}
                        <BestSellingProduct {...item}/>
                    {/each}
                </div>
            </div>
        </div>

        <Space/>

        <div class="container_3">
            <div class="img_cont_3_lef"><img alt="" src="{left_cover_2}"></div>
            <div class="container_3_1">
                <h2>Nosotros te ofrecemos</h2>
                <div class="List_container">
                    {#each List_NotableFeature as item}
                        <NotableFeature {...item}/>
                    {/each}
                </div>
            </div>
            <div class="img_cont_3_rig"><img alt="" src="{right_cover_2}"></div>
        </div>

        <Space/>

        <div class="container_4 container_flex">
            <div class="container_4_1">
                <h2>¿Cómo comprar?</h2>
                <div class="List_container">
                    {#each List_Information as item}
                        <CardInformation {...item}/>
                    {/each}
                </div>
            </div>
        </div>

        <Space/>

        <style>
            .container_1 {
                display: flex;
                justify-content: space-between;

                & .container_1_1, & .container_1_3 {
                    & img {
                        width: 400px;
                    }
                }

                & .container_1_2 {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 17px;

                    & img {
                        width: 370px;
                    }
                }
            }

            .container_2 {
                & .container_2_1 {
                    width: var(--tamaño_de_contenedor);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;

                    & .list_container {
                        width: inherit;
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }


            .container_3 {
                display: flex;
                justify-content: space-between;

                & .img_cont_3_lef, & .img_cont_3_rig {
                    & img {
                        width: 100px;
                    }
                }

                & .container_3_1 {
                    width: var(--tamaño_de_contenedor);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;

                    & .List_container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        gap: 24px;
                    }
                }
            }

            .container_4 {
                & .container_4_1 {
                    width: var(--tamaño_de_contenedor);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;

                    & .List_container {
                        width: inherit;
                        display: flex;
                        justify-content: space-between;
                        gap: 24px;
                    }

                }
            }

        </style>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            tablet
        </div>
    {/if}
</MediaQuery>

<MediaQuery let:matches query="(max-width: 1439px) and (min-width: 768px)">
    {#if matches}
        <div class="root tablet">
            teléfono
        </div>
    {/if}
</MediaQuery>





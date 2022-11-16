<template>
    <div class="card">
        <div class="card__content">
            <div class="card__title">
                {{item.title}}
            </div>
            <div class="card__description">
                {{item.description}}
            </div>
            <div class="card__wrapper">
                <img
                class="card__image"
                :src="item.src"
                alt="item.title"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
 name: "CardBlank",
 props:{
    item:{
        default: ()=>{},
        type: Object
        }
    },
}
</script>


<style lang="sass" src="@/assets/sass/components/card.sass" scoped></style>

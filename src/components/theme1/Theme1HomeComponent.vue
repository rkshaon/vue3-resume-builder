<template>
    <div class="container" style="">
        <div class="resume">
            <Theme1HeadComponent />
            <Theme1BodyComponent style="padding-top: 10px;"/>
        </div>
    </div>
</template>

<script>
import Theme1BodyComponent from './Theme1BodyComponent.vue'
import Theme1HeadComponent from './Theme1HeadComponent.vue'

export default {
    name: 'Theme1HomeComponent',
    props: {},
    components: { Theme1HeadComponent, Theme1BodyComponent }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

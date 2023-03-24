<template>
    <div class="head">
        <p class="text-uppercase akceler-a-font applicant-name">Rezaul Karim Shaon</p>
        <p class="text-uppercase akceler-a-font applicant-designation"><i>Backend Engineer</i></p>
    </div>
</template>

<script>
export default {
    name: 'Theme1HeadComponent',
    props: {}
}
</script>

<style scoped>
.head {
    background-color: #333333;
    text-align: center;
    padding: 5px 0px;
    color: #fff;
}
.applicant-name {
    letter-spacing: 5px;
    font-weight: lighter;
    font-size: 50px;
    padding: 0px;
    margin: 0px;
}
.applicant-designation {
    font-size: 24px;
    letter-spacing: 1px;
    padding: 0px;
    margin: 0px;
}
</style>
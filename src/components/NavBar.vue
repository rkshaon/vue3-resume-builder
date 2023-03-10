<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/">My Company Logo</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/">Home Page</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/theme1">Theme 1</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    name: "NavBar",
    props: {},
    components: {}
}
</script>
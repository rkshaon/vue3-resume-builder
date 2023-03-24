<template>
    <div class="row">
        <div class="col-4" id="left-side-bar">
            <div class="text-end">
                <h3 class="text-uppercase akceler-a-medium-font">Contact</h3>
                <ul class="city-boys-soft-light-font font-size-18 list-style-type-none">
                    <li>
                        rkshaon.ist@gmail.com<font-awesome-icon icon="fa-solid fa-envelope" style="padding-left: 10px;"/>
                    </li>
                    <li>+880 1521 205 142<font-awesome-icon icon="fa-solid fa-phone" style="padding-left: 10px;"/></li>
                    <li>Dhaka, Bangladesh<font-awesome-icon icon="fa-solid fa-address-book" style="padding-left: 10px;" /></li>
                    <li>
                        <a href="https://www.linkedin.com/in/rkshaon/" target="_blank">
                            <font-awesome-icon icon="fab fa-linkedin" style="color: black; padding-left: 10px;" />
                        </a>
                        <a href="https://twitter.com/rkshaon97" target="_blank">
                            <font-awesome-icon icon="fab fa-twitter" style="color: black; padding-left: 10px;"/>
                        </a>
                        <a href="https://github.com/rkshaon" target="_blank">
                            <font-awesome-icon icon="fab fa-github" style="color: black; padding-left: 10px;"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="text-end">
                <h3 class="text-uppercase akceler-a-medium-font">Education</h3>
                <ul class="city-boys-soft-light-font font-size-18 list-style-type-none">
                    <li>BSc in CSE</li>
                    <li>Institute of Science and Technology</li>
                    <li>National University, Bangladesh</li>
                </ul>
                <p></p>
                <p></p>
            </div>
            <div class="text-end">
                <h3 class="text-uppercase akceler-a-medium-font">Skills</h3>
                <ul class="city-boys-soft-light-font font-size-18 list-style-type-none">
                    <li>Python</li>
                    <li>Django</li>
                    <li>PostgreSQL</li>
                    <li>Git</li>
                    <li>Linux</li>
                </ul>
            </div>
        </div>
        <div class="col-8">
            <div class="text-start">
                <h3 class="text-uppercase akceler-a-medium-font">Work Experience</h3>
                <div>
                    <h5>Software Engineer</h5>
                    <div class="city-boys-soft-regular-font font-weight-bold">
                        <p>
                            Algorithm Generation Limited || Dec' 2022 to Present
                        </p>
                    </div>
                    <ul class="city-boys-soft-regular-font list-style-type-circle">                        
                        <li>Analysis requirements</li>
                        <li>Design and develop database</li>
                        <li>Design and develop APIs</li>
                        <li>Produce quality code</li>
                        <li>Review code.</li>
                    </ul>
                </div>
                <div>
                    <h5>Junior Software Engineer</h5>
                    <div class="city-boys-soft-regular-font font-weight-bold">
                        <p>
                            Algorithm Generation Limited || Dec' 2021 to Nov' 2022
                        </p>
                    </div>
                    <ul class="city-boys-soft-regular-font list-style-type-circle">
                        <li>Analysis requirements</li>
                            <li>Design and develop database</li>
                            <li>Design and develop APIs</li>
                            <li>Produce quality code</li>
                    </ul>
                </div>
                <div>
                    <h5 class="">Apprentice Software Engineer</h5>
                    <div class="city-boys-soft-regular-font font-weight-bold">
                        <p>
                            Algorithm Generation Limited || Jun '21 to Nov '21
                        </p>
                    </div>
                    <ul class="city-boys-soft-regular-font list-style-type-circle">
                        <li>Analysis requirements</li>
                        <li>Design and develop database</li>
                        <li>Design and develop APIs</li>
                    </ul>
                </div>
            </div>
            <div class="text-start">
                <h3 class="text-uppercase akceler-a-medium-font">Projects</h3>
                <div>
                    <h5>Algorithm Generation Limited</h5>
                    <div>
                        <div class="city-boys-soft-regular-font font-weight-bold">
                            <p>
                                Personal Accounting Application || Jun '21 to Present
                            </p>
                        </div>
                        <ul class="city-boys-soft-regular-font list-style-type-circle">
                            <li>Analysis requirements, design and develop database and APIs in Backend.</li>
                            <li>
                                <div class="" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-sm btn-outline-dark mx-1">DRF</button>
                                    <button type="button" class="btn btn-sm btn-outline-dark mx-1">PostgreSQL</button>
                                    <button type="button" class="btn btn-sm btn-outline-dark mx-1">Django-Channels</button>
                                    <button type="button" class="btn btn-sm btn-outline-dark mx-1">AP Scheduler</button>
                                    <button type="button" class="btn btn-sm btn-outline-dark mx-1">Google APIs</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="city-boys-soft-regular-font font-weight-bold">
                            <p>
                                HR Application || Aug '21 to Jan '22
                            </p>
                        </div>
                        <ul class="city-boys-soft-regular-font list-style-type-circle">
                            <li>Analysis requirements, design and develop database and APIs in Backend.</li>
                            <li>
                                <div class="" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-sm btn-outline-dark mx-1">DRF</button>
                                    <button type="button" class="btn btn-sm btn-outline-dark mx-1">PostgreSQL</button>
                                    <button type="button" class="btn btn-sm btn-outline-dark mx-1">Django-Channels</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Theme1BodyComponent',
    props: {}
}
</script>

<style scoped>
#left-side-bar li {
    padding-top: 5px;
}
.segment-title {
    letter-spacing: 5px;
}
</style>
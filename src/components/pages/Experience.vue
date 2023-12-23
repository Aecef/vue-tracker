

<script>

import useDownloadPDF from '@util/useDownloadPDF.vue';
import resume from '@assets/AlecCleofeResume.pdf';
import skills from '@util/Skills.js';

export default {
    name: 'Experience',
    data() {
        return {
            skills: skills,
        }
    },
    setup() {
        const { downloadPDF } = useDownloadPDF();
        return { downloadPDF }
    },
    methods: {
        reactPDF() {
            console.log(resume);
        }
    }
}

</script>

<template>
    <div id="experience">
        <h1> Experience </h1> 
        <button @click="downloadPDF('/src/assets/AlecCleofeResume.pdf', 'AlecCleofeResume.pdf')"> Download My Resume </button>
        
        <div class="row">
            <div class="col-sm-4 skill" v-for="skill in skills" style="background-color: red;"> {{ skill }}</div>
        </div>

    </div>
</template>

<style scoped>

.skill {
    display: grid;
    height: 100px;
    border: 2px solid black;
    place-content: center;
}

</style>

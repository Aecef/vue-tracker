

<script>

import useDownloadPDF from '@util/useDownloadPDF.vue';
import resume from '@assets/AlecCleofeResume.pdf';

export default {
    name: 'Experience',
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
        <button @click="downloadPDF(resume, 'AlecCleofeResume.pdf')"> Download My Resume </button>
    </div>
</template>
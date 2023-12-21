<script>

export default function useDownloadPDF() {
    const downloadPDF = (pdfURL, pdfDownload) => {
        console.log("Downloading PDF");
        const link = document.createElement('a');
        link.href = pdfURL;
        link.target = '_blank';
        link.download = pdfDownload;
        console.log(link.href);
        link.dispatchEvent(new MouseEvent('click'));
    }
    return { downloadPDF }
}
</script>
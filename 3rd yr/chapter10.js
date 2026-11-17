
document.addEventListener("DOMContentLoaded", function () {

    // DOWNLOAD LESSON AS PDF
    const downloadPDF = document.getElementById("downloadPDF");

    if (downloadPDF) {
        downloadPDF.addEventListener("click", function () {

            const originalTitle = document.title;

            document.title =
                "Chapter 10 - Website Testing, Hosting, Deployment, and Maintenance";

            window.print();

            setTimeout(function () {
                document.title = originalTitle;
            }, 1000);

        });
    }

});

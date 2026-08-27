console.clear();

console.log("🧬 OmicsStudio Started");

console.log("Version 1.0");

function copyCitation() {

    const citation =
        "Prashanth B J (2026). HeatmapStudio: An interactive web-based platform for heatmap visualization and analysis. Version 1.0.0. Zenodo. https://doi.org/10.5281/zenodo.22133719";

    navigator.clipboard.writeText(citation)
        .then(() => {
            alert("Citation copied to clipboard!");
        })
        .catch(() => {
            alert("Unable to copy citation.");
        });
}

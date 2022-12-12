const date = new Date();
const copyright = document.getElementById('copyright')

function writeCopyright() {
    copyright.innerHTML = "Reach X Marketing " + "&copy; " + date.getFullYear()
}

writeCopyright()
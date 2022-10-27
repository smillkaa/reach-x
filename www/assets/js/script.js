const date = new Date();
const copyright = document.getElementById('copyright')

function writeCopyright() {
    copyright.innerHTML = "&copy; " + date.getFullYear() + " Reach X Marketing"
}

writeCopyright()
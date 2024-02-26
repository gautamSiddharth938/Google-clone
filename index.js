// alert("Script is running")
document.getElementById('search').addEventListener("keyup", listenToMe);

function listenToMe(event) {
    if (event.key == 'Enter') {
        console.log(this.value)
        additem(this.value)
        this.value = " "
    }
}
function additem(value) {
    let a = document.createElement('a')
    a.setAttribute('href', `https://www.google.com/search?q=${value}&oq=${value}&aqs=chrome..69i57j46i199i433i465i512j46i199i465i512j0i131i433i512j0i131i433i650j0i131i433i512l4j0i271.8072083j0j15&sourceid=chrome&ie=UTF-8`)
    a.setAttribute('target', '_parent')
    window.open(a)
}

// const ExecutionPreocess = () => {
//     document.getElementById('search').style.width = '80%'
// }
let n = 0

function render() {
const title = <h1>
     bonjour les gens <span> {n} </span>

</h1>

ReactDOM.render(title, document.querySelector('#app'))

}
render()

window.setInterval(() => {
    n++
    render()

}, 1000)


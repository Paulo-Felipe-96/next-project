export default function Button({ children, test }) {
if(test) {
    return <span>test</span>
}
    return <div><button> {children} </button></div>
}
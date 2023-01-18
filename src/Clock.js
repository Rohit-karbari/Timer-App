const Clock = (props) => {
    const {time, color} = props
    return (
        <div >
        <h1 style={{color: color}}>
        {time}
        </h1>
        </div>
    )
}
export default Clock
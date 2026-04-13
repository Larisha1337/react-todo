const username = 'Aleksandr'
const isLoggedIn = true;

const itInner = () => {
    const tasks = [
        'Aleksandr',
        'Alisa',
        "Oled"
    ]

    let content

    if (isLoggedIn) {
        content = <b style={{color: "blue"}}>How {username}</b>
    }
    else {
        content = <button>Log in</button>
    }
    return (
        <div>
            <h1>To Do List</h1>
            <b>Hello {username.toUpperCase()}</b>
            {isLoggedIn ? <p style={{background: "gray"}}>Hi {username}</p> : <button>Click</button>}
            <div>
                {content}
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default itInner
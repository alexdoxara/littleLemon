import food from './assets/restauranfood.jpg'
const Main = () => {
    return (
        <main>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet,<br></br>
                    consectetur adipiscing elit, <br></br>
                    sed do eiusmod tempor incididunt <br></br>
                    ut labore et dolore magna aliqua.
                </p>
                <button>Reserve a table</button>
            </div>
            <div id="imgcont">
                <img src={food}></img>
            </div>

        </main>

    )
}

export default Main;
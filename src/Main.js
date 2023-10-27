import food from './assets/restauranfood.jpg'
const Main = () => {
    return (
        <main>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Little Lemon is a charming neighborhood
                    bistro that serves simple food and classic cocktails
                    in a lively but casual enviroment. The restaurant
                    features a locally-sourced menu with daily specials
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
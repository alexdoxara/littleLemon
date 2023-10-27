import marioa from "./assets/Mario and Adrian A.jpg"
import mariob from "./assets/Mario and Adrian b.jpg"
const Section3 = () => {
    return (
        <section3 id="section3">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Mario and Adrian are talented chefs who cook diverse cuisines
                    from around the world. They use amazing flavors, skills and
                    creativity to make delicious and beautiful dishes.
                </p>
            </div>

            <div id="imgprt">
                <div id="img1" className="imgcont">
                    <img src={mariob}></img>

                </div>

                <div id="img2" className="imgcont">
                    <img src={marioa}></img>
                </div>
            </div>
        </section3>

    )
}

export default Section3;
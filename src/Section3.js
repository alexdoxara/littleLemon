import marioa from "./assets/Mario and Adrian A.jpg"
import mariob from "./assets/Mario and Adrian b.jpg"
const Section3 = () => {
    return (
        <section3 id="section3">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet,<br></br>
                    consectetur adipiscing elit, <br></br>
                    sed do eiusmod tempor incididunt <br></br>
                    ut labore et dolore magna aliqua.
                </p>
            </div>

            <div>
                <div id="img1" className="imgcont">
                    <img src={mariob}></img>

                </div>

                {/* <div id="img2" className="imgcont">
                    <img src={marioa}></img>
                </div> */}
            </div>
        </section3>

    )
}

export default Section3;
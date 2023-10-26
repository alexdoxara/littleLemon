import avatar from "./assets/—Pngtree—business male icon vector_4187852.png"
const Section2 = () => {
    return (
        <section2 id="section2">
            <h2>Testimonials</h2>

            <div className="testi">
                <p className="star">⭐⭐⭐</p>
                <img className="avatar" src={avatar}></img>
                <p>Alex</p>
                <p className="review">The food is authentic and delicious. The staff is friendly and attentive.</p>
            </div>

            <div className="testi">
                <p className="star">⭐⭐⭐</p>
                <img className="avatar" src={avatar}></img>
                <p>John</p>
                <p className="review">The atmosphere is cozy and warm. The food is fresh and flavorful.</p>
            </div>



            <div className="testi">
                <p className="star">⭐⭐⭐</p>
                <img className="avatar" src={avatar}></img>
                <p>George</p>
                <p className="review">The view is breathtaking. The food is exquisite and beautifully presented.</p>
            </div>



            <div className="testi">
                <p className="star">⭐⭐⭐</p>
                <img className="avatar" src={avatar}></img>
                <p>Alan</p>
                <p className="review">The service is impeccable. The food is creative and delicious.</p>
            </div>

        </section2>

    )
}

export default Section2;
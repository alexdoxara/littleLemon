import salad from './assets/greeksalad.jpg'
import brucheta from './assets/bruchetta.svg'
import lemon from './assets/lemon dessert.jpg'
const Section1 = () => {
    return (
        <section id="section1">

            <h2>This weeks specials!</h2>
            <button>Online Menu</button>
            <div class="card">
                <img src={salad}></img>
                <h3>Greek Salad</h3>
                <p className='price'>price: 12.99$</p>
                <p>The famous greek salad
                    crispy lettuce,peppers,
                    olives and our Chicago style
                    feta cheese, garnished with
                    crunchy gralic and rosemary
                    croutons.</p>

                <p><str>Order a delivery</str></p>
            </div>


            <div class="card">
                <img src={brucheta}></img>
                <h3>bruchetta</h3>
                <p className='price'>price: 5.99$</p>
                <p>Our Bruschetta is made from
                    grilled bread that has been
                    smeared with garlic and
                    seasoned with salt and olive
                    oil
                    croutons.</p>

                <p><str>Order a delivery</str></p>
            </div>



            <div class="card">
                <img src={lemon}></img>
                <h3>Lemon Dessert</h3>
                <p className='price'>price: 5$</p>
                <p>This comes straight from
                    grandma's recipe book,every
                    last ingredient has been
                    sourced and is as authentic
                    ascan be imagined</p>

                <p><str>Order a delivery</str></p>
            </div>
        </section >

    )
}

export default Section1;
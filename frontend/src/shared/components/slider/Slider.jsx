import './Slider.css'

function Slider({ contents }) {
    return (
        <section class="carousel" aria-label="Gallery">
            <ol class="carousel__viewport">
                {contents.map((e, i) => (
                    <li
                        id={`carousel__slide${i}`}
                        tabindex="0"
                        className="carousel__slide"
                        key={i}
                    >
                        {e}


                        {/* <div className="carousel__snapper"> */}
                            {/* <a href="#carousel__slide4"
                className="carousel__prev">Go to last slide</a>
            <a href="#carousel__slide2"
                className="carousel__next">Go to next slide</a> */}
                        {/* </div> */}
                    </li>
                ))}

            </ol>

            {/* 하단 동그라미 */}
            <aside class="carousel__navigation">
                <ol class="carousel__navigation-list">
                    {contents.map((e, i)=>(
                        <li class="carousel__navigation-item">
                        <a href={`#carousel__slide${i}`}
                            class="carousel__navigation-button">Go to slide 1</a>
                    </li>
                    ))}
                </ol>
            </aside>
        </section>
    )
}

export default Slider;
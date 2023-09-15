import Tour from "./Tour"

const Tours = (props) => {
    const deleteTour = (id) => {
        const newTourList = props.tourList.filter((tour) => {
            return tour.id !== id;
        })
        // console.log(newTourList);
        props.setTours(newTourList);
    }

    return (
        <>
            <section>
                <div className="title">
                    <h2>Our Tours</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="tours">
                    {props.tourList && props.tourList.map((tour) => {
                        return <Tour {...tour} key={tour.id} deleteTour={deleteTour} />
                    })}
                </div>
            </section>
        </>
    )
}

export default Tours
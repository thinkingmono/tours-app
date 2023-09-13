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
            <main>
                <ul>
                    {props.tourList && props.tourList.map((tour) => {
                        return <Tour {...tour} key={tour.id} deleteTour={deleteTour} />
                    })}
                </ul>
            </main>
        </>
    )
}

export default Tours
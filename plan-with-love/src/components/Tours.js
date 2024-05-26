import Card from'./Card'
function Tours ({tours , removeTour}){
    return (
        // ek parent dhonga to ek parent div bana do 
        <div className='container'>
            <div className='title'>
                <h2>Plan with love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key = {tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );

}

export default Tours;
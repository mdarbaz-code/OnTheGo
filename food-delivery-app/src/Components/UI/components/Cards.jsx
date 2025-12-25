

// fetch logic here

const CardItem = (props) => {
    return (
        <div className="card-item">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

const CardComponent = (single='', multiple=false) => {
    const [data, setData] = useState([]);
    
    return (
        <>
            {
                data?.length > 0 ? (
                    multiple ? data.map(item => <CardItem key={item.id} {...item} />) : <Card {...data[0]} />
                ) : (
                    <p>No data available</p>
                )
            }
        </>
    );
}

export default CardComponent;
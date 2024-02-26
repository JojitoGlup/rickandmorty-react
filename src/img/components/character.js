export default function Character(props) {
    const {characters, setCharacters} = props;
    const resetCharacters =()=>{
        setCharacters(null);
    }

    return (
    <div className="characters">
        <h1>personajes</h1>
        <span className="back-home" onClick={resetCharacters}>Volver a home</span>
        <div className="container-characters">
            {characters.map((Character, index)=>(
                //return implicito
                <div className="character-container" key={index}>
                    <div>
                        <img src={Character.image} alt={Character.name}></img>
                    </div>
                    <div>
                        <h3>{Character.name}</h3>
                        <h6>
                            {Character.status === "Alive" ? (
                                <>
                                    <span className="alive">    Alive</span>
                                </>
                            ):(
                                <>
                                    <span className="dead">     Dead</span>
                                </>
                            )}
                        </h6>
                        <p>
                            <span className="text-grey">Episodios: </span>
                            <span>{Character.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Especie: </span>
                            <span>{Character.species}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <span className="back-home"  onClick={resetCharacters}>volver a home</span>
    </div>
    );
};

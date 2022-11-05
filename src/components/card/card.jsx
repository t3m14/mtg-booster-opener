


function Card(){
    function find_card(find_string){
        fetch('https://api.magicthegathering.io/v1/sets/ktk/booster')
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);
            return(out);
    }).catch(err => console.error(err));
    }
    return(
        <div className="wrapper">
            <p>
            {
                 
                 find_card()["cards"]
                
            }
            </p>
        </div>
    )
}

export default Card;
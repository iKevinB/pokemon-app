
import Card from './Card'

export default function Display({pokemon}) {
  return (
    <div>
        {
            pokemon.map((val, idx) => 
                 <Card key={val} thisPokemon={val} t/>
            )  
        }
    </div>
  )
}

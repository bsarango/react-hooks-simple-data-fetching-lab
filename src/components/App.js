// create your App component here
import React, {useState,useEffect} from "react"

function App(){
    const [dogImage, setDogImage] = useState("")
    // const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp=>resp.json())
        .then(data=>setDogImage(data.message))

        // setIsLoaded(true)
    },[])

    if(!dogImage)return <p>Loading...</p>
    

    return <img src={dogImage} alt="A Random Dog" />
    
}

export default App
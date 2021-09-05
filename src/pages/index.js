import React, { useState, useEffect } from "react"
import "./style.css"
import data from "./../data/sampledata.json"
import StoreReport from "../components/comp_storeReport"

// let myJson
// fetch("./../data/sampledata.json")
//   .then(response => response.json())
//   .then(json => myJson=json);


  const IndexPage2 = () => {
    const [starsCount, setStarsCount] = useState(0)
    useEffect(() => {
      // get data from GitHub api
      fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
          setStarsCount(resultData.stargazers_count)
        }) // set data for the number of stars
    }, [])
    return (
      <section>
        <p>Runtime Data: Star count for the Gatsby repo {starsCount}</p>
      </section>
    )
  }


// markup
const IndexPage = () => {
  const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)   //CHANGE THIS TO THE JSON NOW FILE
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setStarsCount(resultData.stargazers_count)
        //can put in all the storeReports here
      }) // set data for the number of stars
  }, [])
  return (
    <main className="wrapper">
      <div className="innerbody">
        <title>Home Page</title>
        <h1>Ps5 Stock Tracker</h1>
        <p>This page monitors australian stores for Playstion 5 stock. If the button is green below, we've found a listing at one of the sites. You can also get notified by adding our discord bot below</p>
        <a href="https://discord.com/oauth2/authorize?client_id=883597656591585290&amp;scope=bot&amp;permissions=2048"><div className="discord_table_wrapper"><img src="/static/discord.svg" height="50" className="discord_logo"/><span className="discord_text">Add this discord bot to your server and get notified directly in the channel</span></div></a>
      
        
        
        <div className="spacer">
        
        {/* Change this to use the useState stuff  */}
        <StoreReport storeName="Target" digital={data.target.digital} disc={data.target.disc} />
        <StoreReport storeName="Amazon" digital={data.amazon.digital} disc={data.amazon.disc} />
        <StoreReport storeName="BigW" digital={data.bigw.digital} disc={data.bigw.disc} />

        </div>
        <p>last updated at {data.timestamp}</p>
        
        {starsCount}
        
      </div>
      
      <div className="donations">
        <p>donations: <br/>  
        bitcoin <br/>
        Doge <br/>
        Eth 

        </p>
      </div>
    </main>
    
  )
}

export default IndexPage


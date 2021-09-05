import * as React from "react"
import "./style.css"
import data from "./../data/sampledata.json"
import StoreReport from "../components/comp_storeReport"



// markup
const IndexPage = () => {
  return (
    <main className="wrapper">
      <div className="innerbody">
        <title>Home Page</title>
        <h1>Ps5 Stock Tracker</h1>
        <p>This page monitors australian stores for Playstion 5 stock. If the button is green below, we've found a listing at one of the sites. You can also get notified by adding our discord bot below</p>
        <div className="discord_table_wrapper"><img src="/static/discord.svg" height="50" className="discord_logo"/><span className="discord_text">Add this discord bot to your server and get notified directly in the channel</span></div>
      
        
        
        <div className="spacer">
        
        <StoreReport storeName="Target" digital={data.target.digital} disc={data.target.disc} />
        <StoreReport storeName="Amazon" digital={data.amazon.digital} disc={data.amazon.disc} />
        <StoreReport storeName="BigW" digital={data.bigw.digital} disc={data.bigw.disc} />

        </div>
        <p>last updated at {data.timestamp}</p>
        
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


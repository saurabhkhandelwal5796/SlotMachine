/* *
*to import emoji : install :emojisense throught extension market , and then open this files language edit settings and paste the define whole code from the commetn 
section of the website.

*

 */





import React, { Component } from 'react'

import SlotM from  './02_SlotMachine';


const App = () => {
    return (
        <>
        <h1 className = "heading_style"> 🎰 Welcome to <span style = {{ fontWeight:"bold"}}>Slot machine  game 🎰</span></h1>

        <div className = "slotmachine">
        <SlotM  x = " 🎅"    y = " 🥻"    z  = "💁‍♂️" />
        <hr/>
        <SlotM  x = " 🎅"    y = " 🎅"   z  = "🎅" />
        <hr/>
        <SlotM  x = " 🎅"    y = " 🎅"   z  = "🎅" />
        <hr/>
        <SlotM  x = " 😸"    y = " 😈"   z  = " 🤧 " />
        <hr/>
        <SlotM  x = " 🏂"    y = " ⛄ "  z  = " 🧼 " />
        <hr/>
        <SlotM  x = " 👍"    y = " 👎"   z  = " 🥇 " />
        <hr/>
        </div>
        </>
    )
};

export default App;
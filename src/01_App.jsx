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
        <h1 className = "heading_style"> ๐ฐ Welcome to <span style = {{ fontWeight:"bold"}}>Slot machine  game ๐ฐ</span></h1>

        <div className = "slotmachine">
        <SlotM  x = " ๐"    y = " ๐ฅป"    z  = "๐โโ๏ธ" />
        <hr/>
        <SlotM  x = " ๐"    y = " ๐"   z  = "๐" />
        <hr/>
        <SlotM  x = " ๐"    y = " ๐"   z  = "๐" />
        <hr/>
        <SlotM  x = " ๐ธ"    y = " ๐"   z  = " ๐คง " />
        <hr/>
        <SlotM  x = " ๐"    y = " โ "  z  = " ๐งผ " />
        <hr/>
        <SlotM  x = " ๐"    y = " ๐"   z  = " ๐ฅ " />
        <hr/>
        </div>
        </>
    )
};

export default App;
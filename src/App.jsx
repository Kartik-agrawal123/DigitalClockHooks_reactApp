import React from 'react';
import SlotM from './SlotMach';

const App = ()=>{
 return(
    <>
        <h1 className='heading-style'> 🎰 Welcome to <span>Slot Machine Game</span> 🎰</h1>
        <div className='slot-machine'>
        <SlotM x = "😎" y = "😎" z = "😎"/>
        <SlotM x = "😄" y = "😂" z = "😎"/>
        <SlotM x = "🍓" y = "🍌" z = "🍓"/>
        <SlotM x = "👨‍👨‍👧‍👧" y = "👨‍👨‍👧‍👧" z = "👨‍👨‍👧‍👧"/>
        <SlotM x = "🚗" y = "🚗" z = "🚗"/>
        </div>
    </>
 )
}
export default App;
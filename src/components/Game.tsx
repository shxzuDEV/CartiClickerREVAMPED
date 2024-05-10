import React, {useState, useEffect} from 'react';
import './Game.css'

import CartiFace from '../assets/WLR.png'
import Uzi from '../assets/uzi.jpg'
import Song from '../assets/song.png'
import Tank from '../assets/tank.jpg'
import FilthyImg from '../assets/wake.jpg'
import Rizzy from '../assets/carti-full.jpg'


export default function Game () {
    const [cartiCoins, setCartiCoins] = useState(0);
    const [CPS, setCPS] = useState(0);

    const [songs, setSongs] = useState(0);
    const [songsCost, setSongsCost] = useState(15);

    const [Filthy, setFilthy] = useState(0);
    const [FilthyCost, setFilthyCost] = useState(40);

    const [Rizzy, setRizzy] = usestate(0);
    const [RizzyCost, setRizzyCost] = useState(1);
    
    const [UziCollabs, setUziCollabs] = useState(0);
    const [UziCost, setUziCost] = useState(100);

    const [tanks, setTanks] = useState(0);
    const [tanksCost, setTanksCost] = useState(1000);
 

    useEffect(() => {
        const interval = setInterval(() => {
            setCartiCoins(a => a + CPS);
        }, 1000)
        return () => clearInterval(interval);
    }, [CPS])

    useEffect(() => {
        document.title = "Carti Clicker" + ` (${cartiCoins} coins)` ;
    }, [cartiCoins])


    const handleClick = () => {
        setCartiCoins(coins => coins+1);
    }

    const BuySong = () => {
        if (cartiCoins >= songsCost) {
            setCartiCoins(coins => coins - songsCost);
            setSongs(songs => songs + 1);
            setSongsCost(cost => Math.ceil(cost*1.2));
            setCPS(CPS => CPS+2);
        }
    } 

    const BuyFilthy = () => {
        if (cartiCoins >= FilthyCost) {
            setCartiCoins(coins => coins - FilthyCost);
            setFilthy(Filthy => Filthy + 1);
            setFilthyCost(cost => Math.ceil(cost*1.2));
            setCPS(CPS => CPS+6);
        }

    }

    const BuyUzi = () => {
        if (cartiCoins >= UziCost) {
            setCartiCoins(coins => coins-UziCost);
            setUziCollabs(collabs => collabs+1);
            setUziCost(cost => Math.ceil(cost*1.2));
            setCPS(CPS => CPS + 10);
        }
    }

    const BuyTank = () => {

        if (cartiCoins >= tanksCost) {
            setCartiCoins(coins => coins - tanksCost); 
            setTanks(tanks => tanks+1);
            setTanksCost(cost => Math.ceil(cost*1.2));
            setCPS(CPS => CPS+66);
        }
        
    const BuyRizzy = () => {
        
     if (cartiCoins >= RizzyCost) {
            setCartiCoins(coins => coins - tanksCost); 
            setRizzy(tanks => tanks+1);
            setRizzyCost(cost => Math.ceil(cost*1.2));
            setCPS(CPS => CPS+66);
        
    }
    

    return (
        <div className="Game">
            <div className="leftPanel">
                <h2>Your CPS: {CPS}</h2>
                <h2>You have {cartiCoins} carti coins</h2>
                <img src={CartiFace} alt="Carti Clicker Face"
                    onClick={() => handleClick()}
                />
            </div>
            <div className="rightPanel">
                {purchaseOption(BuySong, songsCost, songs, "Make a song", Song)}
                {purchaseOption(BuyFilthy, FilthyCost, Filthy, "WAKE UP FILTHY**", FilthyImg)}
                {purchaseOption(BuyUzi, UziCost, UziCollabs, "Collab w/ Uzi**SLATT", Uzi)}
                {purchaseOption(BuyTank, tanksCost, tanks, "**RIDE IN A NEW TANK", Tank)}
            </div>
        </div>
    )

}

function purchaseOption(BuyFunction: () => void, cost: number, quantity: number, description : string, imgPath: string) {
    return (
        <div className="purchaseOption" onClick={() => BuyFunction()}>
        <img src={imgPath} alt={`Buy ${description}` } />
        <div className="optionDescription">
            <div className="descrLeft">
                <span>{description}</span>
                <span>{cost} carti coins</span>
            </div>
            <div className="descrRight">
                <span className="quantity">{quantity}</span>
            </div>
        </div>
    </div>
    )
    
}

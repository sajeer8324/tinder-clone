import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:"Elon Musk",
            url:"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        },

        {
            name:"Shalu",
            url:"https://lh3.googleusercontent.com/XQ3B-GtyZdgQMraAjpzApq2hcvjWDhKugxRC2sUEnN6qJH1piR8llQg2kD16Q1VfCP0D8lny1q_PLlsUwUdpRxDHKb6CqEUjbEqCVJzFJEe2h1GU6-Zcf3EpoI4dF-8zpqTwYVJ6V0mHje7AvzO952h04oJOxTmEUAegPR0HKIqXUZAGD--t5Wu6vgF_V7Zmkt2dif2XzM-ohJCBI_q74_DWmz-YNYT5j3WDfOMTFYGpcxs1k9e_cs3qyuvKdgUli2uSYbQSa_lRH6U5Ww88YGS3vC0T3Eo-li70oC7nC-VJemvtO9AdbD0R0E8LpyEKQoMkdRB8cM8WfQW8htWMfR-JQhVLJiLeJmV0QHKg2j67MbYt1DTb3UpOuVdber0dlDSkFErHt_tQRpyh0wlbklupwz1CmEtb7hcRSO0hHmP0IyWQ5jBqz3RNmiorOa6Jhl24F7lrzB525Z5fRY9M8044ku6Uxj7F-bRYTr_xQkf_xDpqWLD2iIMaiKGnhkTyoDpKhrceQawdUQTR3hzYEet5TTNuwi2MJ6WjD8KDWsWSlN-jDn-_LLrg7oZsTVnxB_ToOXVBb-TjjTNsaF1_51kD5dt4Ds7ZEv2DbnIJWEpMeFMyGrhecYOPhv6--9Q_Wnu-Vw0BuXGdX6O-xMjNySo4Tgj-0Clpoc095jGKX31z_Ivv43F-bdtHUxFuAfwY5MCubyRMeW1Cytr-KaJjrAg3=w347-h657-no?authuser=0",
        },
    ]);

    const swiped =(direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
       // setLastDirection(direction);
    };
    const outOfFrame =(name) => {
        console.log(name + "left the screen!");
    };


    return (
        <div className="tinderCards">
          <div className="tinderCards__cardContainer">
             {people.map((person) => (
              <TinderCard 
               className="swipe"
               key={person.name}
               preventSwipe={["up","down"]}
               onSwipe={(dir) => swiped(dir,person.name)}
               onCardLeftScreen={()=> outOfFrame(person.name)}
               >
                   <div 
                    style={{backgroundImage:`url(${person.url})`}}
                    className="card"
                   >
                    <h3>{person.name}</h3>
                   </div>
             </TinderCard>
             ))}
          </div>
            
            
        </div>
    );
}

export default TinderCards;

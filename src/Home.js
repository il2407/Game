import React, { useState, useEffect } from "react";
import Link from "@mui/material/Link";

const data = {
  Hysteria: "And I want you now, I feel my heart implode",
  Starlight: "Our hopes and expectations, black holes and revelations",
  Uprising: "They will not force us, they will stop degrading us",
  "Knights of Cydonia":
    "No one's gonna take me alive, time has come to make things right",
  "Supermassive Black Hole":
    "Glaciers melting in the dead of night, and the superstars sucked into the supermassive",
  "Plug In Baby":
    "I've exposed your lies, baby, the underneath's no big surprise",
  Psycho: "My mind is just a fucking mess, I'm paranoid, I'm paranoid",
  "Time Is Running Out": "You will suck the life out of me",
  "Dead Inside": "Don't leave me out in the cold, don't leave me out to die",
  Madness: "And I have finally realized what you mean",
  "Feel Good Inc.":
    "Windmill, windmill for the land, turn forever hand in hand",
  "Little Monster": "I got love on my fingers, lust on my tongue",
  "Figure It Out": "Well, you're just a hideaway, you're just a feeling",
  "Out of the Black":
    "There's nowhere left to hide, in the ashes of their eyes",
  "Lights Out": "Lights out, I'm infected, and somehow you've injected",
};

const Home = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [correctMatches, setCorrectMatches] = useState(0);
  const [exposedLetters, setExposedLetters] = useState("");

  useEffect(() => {
    initializeCards();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setTimeout(() => {
        checkForMatch();
      }, 1000);
    }
  }, [flippedCards]);

  const initializeCards = () => {
    const newCards = [];

    Object.entries(data).forEach(([country, city]) => {
      const cityCard = createCard(city, country);
      const countryCard = createCard(country, city);
      newCards.push(cityCard);
      newCards.push(countryCard);
    });

    setCards(shuffleArray(newCards));
  };

  const createCard = (name, city) => {
    return {
      name,
      city,
      flipped: false,
      matched: false,
      wrongMatch: false,
    };
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleCardClick = (index) => {
    if (
      flippedCards.length === 2 ||
      cards[index].flipped ||
      cards[index].matched
    ) {
      return;
    }

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, index]);
  };

  const checkForMatch = () => {
    const newCards = [...cards];
    const [card1Index, card2Index] = flippedCards;
    const card1 = newCards[card1Index];
    const card2 = newCards[card2Index];

    if (card1.city === card2.name) {
      card1.matched = true;
      card2.matched = true;
      setMatchedCards([...matchedCards, card1Index, card2Index]);
      setFlippedCards([]);

      // Increment the correctMatches count
      setCorrectMatches(correctMatches + 1);

      // Expose a letter from the word "Pashtidutza"
      const letterToExpose = "Pashtidutza"[correctMatches];
      setExposedLetters(exposedLetters + letterToExpose);
      if (exposedLetters === "Pashtidutza")
        setTimeout(() => {
          removeMatchedCards();
        }, 2000);
    } else {
      card1.wrongMatch = true;
      card2.wrongMatch = true;
      setFlippedCards([]);
      setCards(newCards);
      setTimeout(() => {
        resetFlippedCards();
      }, 1000);
    }

    if (matchedCards.length + 2 === cards.length) {
      setGameOver(true);
    }
  };

  const resetFlippedCards = () => {
    const newCards = [...cards];
    flippedCards.forEach((cardIndex) => {
      newCards[cardIndex].flipped = false;
      newCards[cardIndex].wrongMatch = false;
    });
    setCards(newCards);
  };

  const removeMatchedCards = () => {
    const newCards = cards.filter((_, index) => !matchedCards.includes(index));
    setCards(newCards);
    setMatchedCards([]);
  };

  const resetGame = () => {
    setCards([]);
    setFlippedCards([]);
    setMatchedCards([]);
    setGameOver(false);
    initializeCards();
  };

  return (
    <>
      {" "}
      <div>
        <style>
          {`
          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 1500px;
            margin: 0 auto;
          }
          h1 {
            text-align: center;
            margin-top: 50px;
          }
          h2 {
            text-align: center;
            margin-top: 50px;
          }
          
          .card {
            width: 150px;
            height: 150px;
            margin: 10px;
            font-size: 20px;
            font-family: "Arial";
            background-color: white;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
          }
          
          .card.flipped {
            background-color: blue;
          }
          
          .card.matched {
            visibility: hidden;
            width: 0;
            height: 0;
            margin: 0;
          }
          
          .card.wrong-match {
            background-color: red;
          }
          
          .card.correct-match {
            background-color: blue;
          }
        `}
        </style>

        <h1 style={{ color: "white" }}>Match Song And Lyrics</h1>
        <h1 style={{ color: "white" }}>
          Match all the songs and earn the eternal honor and dignity of The
          Great Pashtidutza{" "}
        </h1>
        <h2 style={{ color: "red", fontSize: 100 }}> {exposedLetters}</h2>

        {exposedLetters === "Pashtidutza" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "",
            }}
          >
            <Link
              color="Yellow"
              variant="h2"
              underline="none"
              href="https://www.facebook.com/photo.php?fbid=10225090739514359&set=t.1194782692&type=3"
              sx={{
                fontSize: 140,
                color: "common.white",
                ml: 3,
              }}
            >
              {"You Won! Press me for the Pashtidutza"}
            </Link>
          </div>
        ) : (
          <div className="card-container">
            {cards.map(
              (card, index) =>
                !card.matched && (
                  <div
                    key={index}
                    className={`card ${card.flipped ? "flipped" : ""} ${
                      card.wrongMatch ? "wrong-match" : ""
                    } ${
                      card.matched && flippedCards.includes(index)
                        ? "correct-match"
                        : ""
                    }`}
                    onClick={() => handleCardClick(index)}
                  >
                    {card.flipped || card.matched ? card.name : card.name}
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

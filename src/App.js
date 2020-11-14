import "./App.css"; //App como tal es un componente.
import Card from "./Components/Card";

function App() {
  const cards = {
    heart: {
      type: "heart",
      number: Math.floor(Math.random() * 13) + 2,
      img:
        "https://www.adda52.com/blog/wp-content/uploads/2013/10/adda52-heart-suit-card_poker.png",
    },
    club: {
      type: "club",
      number: Math.floor(Math.random() * 13) + 2,
      img:
        "https://lh3.googleusercontent.com/proxy/tAeI9zp2mDxQ7XkkiGSxd0buUEYuYzIm6E7QsnKaHHTaMubecaf3OqJ3dAddS4DqfpeSy7hvTD09HMJrvQpC2nYhwDBOEtmPVlacVNJo4ymuRR1T9zMlSIyPlJHOj5y3IFJ_03kjBAyfJaI",
    },
    spade: {
      type: "spade",
      number: Math.floor(Math.random() * 13) + 2,
      img:
        "https://cdn4.iconfinder.com/data/icons/pretty-office-part-7-simple-style/256/Spades.png",
    },
    diamond: {
      type: "diamond",
      number: Math.floor(Math.random() * 13) + 2,
      img:
        "https://cdn.iconscout.com/icon/free/png-256/diamond-suit-card-37936.png",
    },
    //  methods: {
    //  change() {
    //    if (this.number === 11) {
    //       this.number = "joker";
    //    }
    //  },
    // },
  };

  return (
    <div className="flex">
      <Card
        type={cards.heart.type}
        number={cards.heart.number}
        img={cards.heart.img}
      />

      <Card
        type={cards.club.type}
        number={cards.club.number}
        img={cards.club.img}
      />

      <Card
        type={cards.spade.type}
        number={cards.spade.number}
        img={cards.spade.img}
      />

      <Card
        type={cards.diamond.type}
        number={cards.diamond.number}
        img={cards.diamond.img}
      />
      <button id="button">Shuffle</button>
    </div>
  ); //aqui siempre retorna un elemento, es decir,
  //se podria englobar, tener un div y todos los que quieras adentro.
}

export default App;

function Food({name,picture}) {
  return ( 
  <div>
    <h2>I like {name}</h2>
    <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hwatongkimchi.com%2Ffile_data%2Fxyzperi02%2F2019%2F12%2F23%2F1c1fda9d08f730fdc22ccb951021465a.jpg&f=1&nofb=1'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.news.zumst.com%2Fimages%2F2%2F2017%2F02%2F26%2F2030c76e427f4c278c16ab0eb81bd45d.jpg&f=1&nofb=1'
  },
  {
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frgo4.com%2Ffiles%2Fattach%2Fimages%2F2651950%2F417%2F385%2F011%2F603b6c64a737ea2f484f07b98b5b956b.jpg&f=1&nofb=1'
  },
  {
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.butcherhands.com%2Fwp%2Fwp-content%2Fuploads%2F2020%2F07%2Fimg_l-5.jpg&f=1&nofb=1'
  },
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FnAJBZbex3EE%2Fmaxresdefault.jpg&f=1&nofb=1'
  }
];

function App() {
  return (
  <div>
    {foodILike.map(dish => <Food key={dish.name} name={dish.name} picture={dish.image}/>)}
  </div>
  );
}

export default App;

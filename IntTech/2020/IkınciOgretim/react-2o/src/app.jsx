var React = require('react');
var ReactDOM = require('react-dom');

class Kullanici extends React.Component {
  constructor() {
    super();
    this.state = { kullanicilar:{results: [] }}
  }
  render() {
    var liste = []
    debugger

    this.state.kullanicilar.results.forEach((element,i) => {
      liste.push(<li  key={i} className="list-group-item" >{element.name}</li>)
    });
    debugger;
    return <div className="bd-example">
      <ul className="list-group" >
        {liste}
      </ul>
    </div>;
  }
  componentDidMount() {
    fetch('https://randomuser.me/api?results=50')
      .then(response => response.json())
      .then(data => this.setState({ kullanicilar: data }));
  }
}

ReactDOM.render(<Kullanici isimler={['kıvanç', 'raif', 'hasan']} />, document.getElementById('react-root'));
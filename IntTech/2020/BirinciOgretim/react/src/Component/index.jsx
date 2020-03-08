var React = require('react');
var ReactDOM = require('react-dom');

class Liste extends React.Component {
  constructor() {
    super();
    this.state = { telefonlar: [] }
  }
  render() {
    var ls = []
    this.state.telefonlar.forEach(element => {
      ls.push(
        <div className="col col-md-4">
          <div className="card">
            <h3 className="card-title">
              {element.DeviceName}
            </h3>
            <img srcSet="https://loremflickr.com/300/300"></img>
            <ul>
              <li>
                tech: {element.technology}
              </li>
              <li>
                messaging: {element.messaging}
              </li>
              <li> cpu: {element.cpu}
              </li>
              <li>  multitouch: {element.multitouch}
                browser: {element.browser}
              </li>
            </ul>
          </div>

        </div>)
    })

    debugger;
    return (
      <div className="row">
        {ls}
      </div>
    );
  }

  componentDidMount() {
    var self = this;
    fetch('https://fonoapi.freshpixl.com/v1/getdevice?token=1b74228e15164d17fa2f58579ef9d174d396a8633f648cef&device=iphone').then(
      function (params) {
        return params.json()
      }
    ).then(function (veri) {
      self.setState({ telefonlar: veri })
    })
  }
}

ReactDOM.render(
  <Liste kisiler={['Taylor', 'kerem', 'hüda', 'momo']} />,
  document.getElementById('container')
);
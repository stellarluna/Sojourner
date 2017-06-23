class App extends React.Component{

  constructor(){
    super();
    this.state = {
      test: 'string to be rendered for test purposes in this.state constructor'
    }
  }
  render(){
    return (<img src={require('http://www.pondclean.com/wp-content/uploads/2016/09/POND-1.jpg')} />);
  }

}
ReactDOM.render(<App/>, document.getElementById('app'))
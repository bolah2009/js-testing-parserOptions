class App {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = btn => {
    const click = `${btn} ${this.state.next}`;
    return click;
  };

  render = () => {
    const { total, next, operation } = this.state;
    const render = `total: ${total}, next: ${next}, operation: ${operation}`;
    return render;
  };
}

export default App;

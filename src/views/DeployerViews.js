import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <>
        <h2>Launch your no-loss lottery Dapp</h2>
        Fill out these fields, and create your Dapp!
        {content}
      </>
    );
  }
}

const defaultDuration = 20;
const defaultSupply = 200000;
const defaultTicketCost = 10; // gAlgo
const defaultJackpotSplit = 5;
const defaultGAlgoT = 793124631;
// const defaultMaxUsers = 1;

exports.SetOpts = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: defaultDuration,
      supply: defaultSupply,
      ticketCost: defaultTicketCost,
      jackpotSplit: defaultJackpotSplit,
      gAlgoT: defaultGAlgoT,
      // maxUsers: defaultMaxUsers
    };

    // https://www.geeksforgeeks.org/
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // https://www.geeksforgeeks.org/
  // Stores all the values of the
  // input field in state using a single method
  // handleChanges of all the input field using
  // an ES6 javascript feature computed property names
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  // https://www.geeksforgeeks.org/
  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    event.preventDefault();
    console.info('Wrapper state on submit!', this.state);
    this.props.parent.deploy(this.state);
  }

  render() {
    return (
      <>
        <br />
        <br />
        <div class="form-style-5">
        <form onSubmit={this.handleSubmit}>
        <fieldset>
          <b>Lottery Duration: </b>
          <input
            name='duration'
            onChange={this.handleChange}
            placeholder={defaultDuration}
            type='text'
            value={this.state.duration || defaultDuration}
          />
          {/* <br /> */}
          {/* <br /> */}
          <b>Supply: </b>
          <input
            name='supply'
            onChange={this.handleChange}
            placeholder={defaultSupply}
            type='text'
            value={this.state.supply || defaultSupply}
          />
          {/* <br /> */}
          {/* <br /> */}
          <b>Ticket Amount: </b>
          <input
            name='defaultTicket'
            onChange={this.handleChange}
            placeholder={defaultTicketCost}
            type='number'
            value={this.state.ticketCost || defaultTicketCost}
          />
          {/* <br />
          <br /> */}
          <b>JackPot Split: </b>
          <input
            name='jackpoSplit'
            onChange={this.handleChange}
            placeholder={defaultJackpotSplit}
            type='number'
            value={this.state.jackpotSplit || defaultJackpotSplit}
          />
          {/* <br />
          <br /> */}
          <b>gAlgo Token: </b>
          <input
            name='token'
            onChange={this.handleChange}
            placeholder={defaultGAlgoT}
            type='number'
            value={this.state.gAlgoT || defaultGAlgoT}
          />
          </fieldset>
          <input
            // className='Deployer SmallButton'
            type='submit'
          value={"Create your Dapp!"}/>
        </form>
        </div>
      </>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        <button className="btn" onClick={() => parent.deploy()}
        >Create Lottery Dap</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Creating Dapp... 
        please sign the transactions to deploy the contract and fund it with rewards.</div>
    );
  }
}

exports.Deployed = class extends React.Component {
  getApplicationId() {
    const {ctcInfoStr} = this.props;
    localStorage.setItem('ApplicationID', ctcInfoStr.toString());
    return ctcInfoStr.toString();
  }

  render() {
    const {connector} = this.props;
    const thing = connector === 'ALGO' ? 'Application ID' : 'contract address';
    return (
      <React.Fragment>
        <main>Dapp created!</main>
        <p>The {thing} is</p>
        <b>{this.getApplicationId()}</b>
      </React.Fragment>
    );
  }
}

exports.Done  = class extends React.Component {
  render() {
    return <>The contract has run to completion</>;
  }
}

export default exports;

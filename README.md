Lossless lottery

For Algorand green house hackerton
--------------------------------------------------------------
Developed with `Reach-lang` and `React`

--------------------------------------------------------------

SDK function used: `prepareMintTransactions`

```javascript
 async mint() {
    console.log(this.props.acc.networkAccount.addr)
    const res = await prepareMintTransactions({
      appId: 793119194,
      gAlgoId: 793124631,
    }, {
      appId: 793119270,
    }, this.props.acc.networkAccount.addr, 10, true)
    console.log(res)
  }

  continue() {
    this.setState({view: 'Attach'});

  }
  ```


========================================

To Run This Project
First, run the development server:

cd src
npm run dev
# or
yarn dev

==========================================
Video link.
https://vimeo.com/742114799/5e9eee199e

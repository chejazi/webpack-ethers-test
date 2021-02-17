## Bug Reproduction repo

Issue: [https://github.com/ethers-io/ethers.js/issues/1296](https://github.com/ethers-io/ethers.js/issues/1296)

To verify, run `npm install` then run `npm run frontend`. The test page should open in your browser otherwise navigate to [0.0.0.0:8080/index.html](0.0.0.0:8080/index.html).

To observe the different behaviors, switch the `ethers` versions in package.json from `5.0.19` to `5.0.20`, re-run `npm install` and then `npm run frontend` again. on `5.0.19` and under, the library successfully dynamicallly loads per the test page. On later versions it does not.
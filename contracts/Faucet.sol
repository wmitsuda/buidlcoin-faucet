pragma solidity ^0.5.0;

import "zos-lib/contracts/Initializable.sol";
import "openzeppelin-eth/contracts/token/ERC20/IERC20.sol";

contract Faucet is Initializable {

    IERC20 erc20Contract;

    function initialize(address erc20) public initializer {
        erc20Contract = IERC20(erc20);
    }

    function gimmeCoins() external {
        erc20Contract.transfer(msg.sender, 100000000000000);
    }

}
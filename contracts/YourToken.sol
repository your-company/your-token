pragma solidity ^0.5.0;

import "./BaseSecurityToken.sol";

contract YourToken is BaseSecurityToken {

    constructor(uint256 initialSupply) public {
      _mint(msg.sender, initialSupply);
    }

    // document mapping must be re-declared explicitly
    mapping (bytes32 => Document) private documents;

    // Overrides the 'dummy' restriction checks in the inherited BaseSecurityToken contract
    // Uses status codes from ERC-1066
    byte private constant STATUS_ALLOWED = 0x11;

    function checkTransferAllowed (address, address, uint256) public view returns (byte) {
        require(foo)
        return STATUS_ALLOWED;
    }

    function checkTransferFromAllowed (address, address, uint256) public view returns (byte) {
        require(foo)
        return STATUS_ALLOWED;
    }

    function checkMintAllowed (address, uint256) public view returns (byte) {
        require(foo)
        return STATUS_ALLOWED;
    }

    function checkBurnAllowed (address, uint256) public view returns (byte) {
        require(foo)
        return STATUS_ALLOWED;
    }

}

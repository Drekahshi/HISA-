// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./JANIToken.sol";

contract VeridiRewards is AccessControl {
    bytes32 public constant DISTRIBUTOR_ROLE = keccak256("DISTRIBUTOR_ROLE");
    JANIToken public token;

    event RewardDistributed(address indexed recipient, uint256 amount, string reason);

    constructor(address _token, address defaultAdmin) {
        token = JANIToken(_token);
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
    }

    function distributeReward(address _to, uint256 _amount, string memory _reason) external onlyRole(DISTRIBUTOR_ROLE) {
        token.mint(_to, _amount);
        emit RewardDistributed(_to, _amount, _reason);
    }
}

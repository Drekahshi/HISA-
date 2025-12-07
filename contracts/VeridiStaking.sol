// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract VeridiStaking is AccessControl {
    IERC20 public stakingToken;

    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 lockDuration;
    }

    mapping(address => Stake) public stakes;
    uint256 public totalStaked;
    uint256 public rewardRate = 10; // 10% APY (simplified)

    event Staked(address indexed user, uint256 amount, uint256 duration);
    event Unstaked(address indexed user, uint256 amount, uint256 reward);

    constructor(address _stakingToken, address defaultAdmin) {
        stakingToken = IERC20(_stakingToken);
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
    }

    function stake(uint256 _amount, uint256 _duration) external {
        require(_amount > 0, "Cannot stake 0");
        require(stakingToken.transferFrom(msg.sender, address(this), _amount), "Transfer failed");

        stakes[msg.sender] = Stake({
            amount: stakes[msg.sender].amount + _amount,
            startTime: block.timestamp,
            lockDuration: _duration
        });

        totalStaked += _amount;
        emit Staked(msg.sender, _amount, _duration);
    }

    function unstake() external {
        Stake memory userStake = stakes[msg.sender];
        require(userStake.amount > 0, "No stake found");
        require(block.timestamp >= userStake.startTime + userStake.lockDuration, "Stake locked");

        uint256 reward = (userStake.amount * rewardRate * (block.timestamp - userStake.startTime)) / (365 days * 100);
        uint256 totalReturn = userStake.amount + reward;

        delete stakes[msg.sender];
        totalStaked -= userStake.amount;

        require(stakingToken.transfer(msg.sender, totalReturn), "Transfer failed");
        emit Unstaked(msg.sender, userStake.amount, reward);
    }
}

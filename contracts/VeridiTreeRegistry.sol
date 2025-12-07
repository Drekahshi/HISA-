// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract VeridiTreeRegistry is AccessControl {
    bytes32 public constant VALIDATOR_ROLE = keccak256("VALIDATOR_ROLE");

    enum Status { PENDING, VERIFIED, DISPUTED, DEAD }

    struct Tree {
        string id;
        string species;
        int256 lat;
        int256 lng;
        uint256 plantingDate;
        address planter;
        address validator;
        Status status;
        string ipfsHash; // Photo/Data proof
    }

    mapping(string => Tree) public trees;
    string[] public treeIds;

    event TreeRegistered(string indexed id, address indexed planter, uint256 plantingDate);
    event TreeVerified(string indexed id, address indexed validator, Status status);

    constructor(address defaultAdmin) {
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
    }

    function registerTree(
        string memory _id,
        string memory _species,
        int256 _lat,
        int256 _lng,
        string memory _ipfsHash
    ) external {
        require(trees[_id].plantingDate == 0, "Tree already registered");

        trees[_id] = Tree({
            id: _id,
            species: _species,
            lat: _lat,
            lng: _lng,
            plantingDate: block.timestamp,
            planter: msg.sender,
            validator: address(0),
            status: Status.PENDING,
            ipfsHash: _ipfsHash
        });

        treeIds.push(_id);
        emit TreeRegistered(_id, msg.sender, block.timestamp);
    }

    function verifyTree(string memory _id, Status _status) external onlyRole(VALIDATOR_ROLE) {
        require(trees[_id].plantingDate != 0, "Tree not found");
        
        trees[_id].status = _status;
        trees[_id].validator = msg.sender;

        emit TreeVerified(_id, msg.sender, _status);
    }

    function getTree(string memory _id) external view returns (Tree memory) {
        return trees[_id];
    }
}

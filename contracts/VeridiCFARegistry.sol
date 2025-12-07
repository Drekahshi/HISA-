// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract VeridiCFARegistry is AccessControl {
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");

    struct CFA {
        string id;
        string name;
        address chairman;
        address treasury;
        bool isVerified;
        uint256 memberCount;
    }

    mapping(string => CFA) public cfas;
    mapping(string => mapping(address => bool)) public cfaMembers;

    event CFARegistered(string indexed id, string name, address chairman);
    event CFAVerified(string indexed id);
    event MemberAdded(string indexed cfaId, address indexed member);

    constructor(address defaultAdmin) {
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
    }

    function registerCFA(string memory _id, string memory _name, address _treasury) external {
        require(cfas[_id].chairman == address(0), "CFA already registered");

        cfas[_id] = CFA({
            id: _id,
            name: _name,
            chairman: msg.sender,
            treasury: _treasury,
            isVerified: false,
            memberCount: 1
        });

        cfaMembers[_id][msg.sender] = true;
        emit CFARegistered(_id, _name, msg.sender);
    }

    function verifyCFA(string memory _id) external onlyRole(VERIFIER_ROLE) {
        require(cfas[_id].chairman != address(0), "CFA not found");
        cfas[_id].isVerified = true;
        emit CFAVerified(_id);
    }

    function addMember(string memory _cfaId, address _member) external {
        require(cfas[_cfaId].chairman == msg.sender, "Only chairman can add members");
        require(!cfaMembers[_cfaId][_member], "Already a member");

        cfaMembers[_cfaId][_member] = true;
        cfas[_cfaId].memberCount++;
        emit MemberAdded(_cfaId, _member);
    }
}

# Veridi Smart Contracts Specification

Based on `backend.json` and `blueprint.md`.

## 1. JANI Token (JANIToken.sol)
**Type**: ERC20
**Purpose**: Native utility and governance token.
- **Minting**: Controlled by Governance and Rewards contracts.
- **Burning**: Supported.
- **Supply**: Fixed/Capped or Inflationary (TBD based on Tokenomics).

## 2. Tree Registry (VeridiTreeRegistry.sol)
**Type**: Registry
**Purpose**: Store immutable records of planted trees.
**Structs**:
```solidity
struct Tree {
    string id;
    string species;
    int256 lat;
    int256 lng;
    uint256 plantingDate;
    address validator;
    Status status; // PENDING, VERIFIED, DEAD
}
```
**Functions**:
- `registerTree(...)`: Submit new tree data.
- `verifyTree(...)`: Update status by authorized validator.

## 3. CFA Registry (VeridiCFARegistry.sol)
**Type**: Registry
**Purpose**: Manage Community Forest Associations.
**Structs**:
```solidity
struct CFA {
    string id;
    string name;
    address chairman;
    address treasury;
    bool isVerified;
}
```
**Functions**:
- `registerCFA(...)`
- `addMember(...)`

## 4. Staking (VeridiStaking.sol)
**Type**: DeFi
**Purpose**: Incentivize holding JANI.
**Features**:
- Stake JANI tokens.
- Earn APY (minted JANI or from reserve).
- Lock-up periods.

## 5. Rewards (VeridiRewards.sol)
**Type**: Distribution
**Purpose**: Distribute tokens for verified actions.
**Logic**:
- Triggered by `verifyTree` in Registry.
- Distributes JANI to Planter, Validator, and CFA Treasury.

## 6. Governance (VeridiGovernance.sol)
**Type**: DAO
**Purpose**: Decentralized control.
**Features**:
- Create Proposals.
- Vote with JANI (or staked JANI).
- Execute contract calls (e.g., change reward rates).

## 7. NFT (VeridiNFT.sol)
**Type**: ERC721
**Purpose**: Digital twin of trees/projects.
**Features**:
- Minted upon Tree Verification.
- Metadata links to full data in Firebase/IPFS.

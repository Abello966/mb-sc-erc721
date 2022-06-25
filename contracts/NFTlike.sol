//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTOwnerMints is ERC721 {
    address public minter;

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {
        minter = msg.sender;
    }

    /* Rewrites minting such that only the owner mints */
    function owner_mints(address to, uint256 tokenId) external {
        require(msg.sender == minter, "Invalid address");
        _safeMint(to, tokenId);
    }

    /* lol */
    function _baseURI() override internal view returns (string memory) {
        return "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/";
    }


}
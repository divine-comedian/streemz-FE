// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Council} from "./Council.sol";
import {Registry} from "./core/Registry.sol";
import {NonTransferableToken} from "./NonTransferableToken.sol";
import {PoolManager} from "./PoolManager.sol";
import {IRegistry} from "./core/interfaces/IRegistry.sol";

contract StreemzCouncil is Council {
    Registry private registry;
    address public registryAddress;

    constructor(
        string memory _name,
        string memory _symbol,
        address _distributionToken,
        address _gdav1Forwarder,
        address _registry
    ) Council(_name, _symbol, _distributionToken, _gdav1Forwarder) {
        registry = Registry(_registry);
        registryAddress = _registry;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MEMBER_MANAGER_ROLE, msg.sender);
        _grantRole(GRANTEE_MANAGER_ROLE, msg.sender);
    }

    /**
     * @notice Add a grantee to the council
     * @param profileId profilId on the Allo Registry of the grantee to add
     */
    function addGrantee(bytes32 profileId) public onlyRole(GRANTEE_MANAGER_ROLE) {
        IRegistry.Profile memory grantee = registry.getProfileById(profileId);
        if (isGrantee(grantee.anchor)) revert GranteeAlreadyAdded();
        _addGrantee(grantee.anchor);
        emit GranteeAdded(grantee.name, grantee.anchor);
    }

    /**
     * @notice Remove a grantee
     * @param profileId profilId on the Allo Registry of the grantee to remove
     */
    function removeGrantee(bytes32 profileId) public onlyRole(GRANTEE_MANAGER_ROLE) {
        IRegistry.Profile memory grantee = registry.getProfileById(profileId);
        _removeGrantee(grantee.anchor);
        emit GranteeRemoved(grantee.anchor);
    }
}

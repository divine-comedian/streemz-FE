// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {SuperAppBaseFlow} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperAppBaseFlow.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {
    ISuperfluid,
    ISuperToken,
    ISuperApp,
    SuperAppDefinitions
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {ISuperfluidPool} from "./interfaces/ISuperfluidPool.sol";
import {GDAv1Forwarder} from "./interfaces/GDAv1Forwarder.sol";

interface Council {
    function addCouncilMember(address _member, uint256 _votingPower) external;
    function removeCouncilMember(address _member) external;
}

contract StreemzSuperAppFlow is SuperAppBaseFlow, Ownable {
    int96 public expectedFlowRate;
    address public council;
    uint256 private baseVotingPower;
    GDAv1Forwarder public gdaForwarder;
    ISuperfluidPool public pool;

    constructor(
        address host,
        int96 _expectedFlowRate,
        address _council,
        uint256 _baseVotingPower,
        address _gdaForwarder,
        ISuperfluidPool _pool
    )
        SuperAppBaseFlow(
            ISuperfluid(host),
            true,
            true,
            true,
            string("") // configWord - empty string for default config
        )
        Ownable()
    {
        expectedFlowRate = _expectedFlowRate;
        council = _council;
        baseVotingPower = _baseVotingPower;
        gdaForwarder = GDAv1Forwarder(_gdaForwarder);
        pool = _pool;
    }

    function onFlowCreated(ISuperToken token, address sender, bytes calldata ctx)
        internal
        virtual
        override
        returns (bytes memory newCtx)
    {
        int96 currentFlowRate = _getFlowRate(ctx);
        if (currentFlowRate == expectedFlowRate) {
            Council(council).addCouncilMember(sender, baseVotingPower);
        }
        gdaForwarder.distributeFlow(address(token), sender, address(pool), currentFlowRate, ctx);
        return ctx;
    }

    function onFlowUpdated(
        ISuperToken token,
        address sender,
        int96, /*previousFlowRate*/
        uint256, /*lastUpdated*/
        bytes calldata ctx
    ) internal override returns (bytes memory newCtx) {
        int96 currentFlowRate = _getFlowRate(ctx);
        if (currentFlowRate != expectedFlowRate) {
            Council(council).removeCouncilMember(sender);
        }
        gdaForwarder.distributeFlow(address(token), sender, address(pool), currentFlowRate, ctx);
        return ctx;
    }

    function onFlowDeleted(
        ISuperToken token,
        address sender,
        address, /*receiver*/
        int96, /*previousFlowRate*/
        uint256, /*lastUpdated*/
        bytes calldata ctx
    ) internal virtual override returns (bytes memory newCtx) {
        Council(council).removeCouncilMember(sender);
        gdaForwarder.distributeFlow(address(token), sender, address(pool), 0, ctx);
        return ctx;
    }

    function _getFlowRate(bytes calldata ctx) internal pure returns (int96) {
        return abi.decode(ctx[4:], (int96));
    }

    function setExpectedFlowRate(int96 _expectedFlowRate) public onlyOwner {
        expectedFlowRate = _expectedFlowRate;
    }

    function setCouncil(address _council) public onlyOwner {
        council = _council;
    }
}

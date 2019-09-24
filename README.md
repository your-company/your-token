# 109-110 
A simple restricted token for dynamic equity tabulation

## BaseSecurityToken
The YourToken contract uses this reference implementation for ERC-1462:
https://github.com/AtlantPlatform/BaseSecurityToken

Although it seems that the question of a "standard" security token interfaces is far from settled, 1462 seems to be the simplest possible approach to an equity work token, without too many bells and whistles.

It allows us to do two necessary things:

1) To directly and inexorably link a deployed contract to one or more legal documents that reference said contract.

2) To restrict the transfer of the token based on arbitrary logic (thus allowing compliance with KYC/AML regulations in the EU).

## Document checks
The token contract is meant to be a *riccardian* contract, and this implementation contains a bare-bones way to link legal documents to the token contract, by the `attachDocument` and `lookupDocument` functions.

Any legal documents that define the token in reference to a company or legal entity should reference the deployed address of the token contract, as well as each function callable in the interface.

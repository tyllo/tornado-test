import { Contract, providers } from 'ethers'
import ABI from 'src/helpers/abi/MerkleProofAirdrop.json'
import { GMerkleProofAirdrop } from 'src/types/generated/GMerkleProofAirdrop'


export class MerkleProofAirdrop {
  public methods: Contract & GMerkleProofAirdrop;

  constructor(
    address: string,
    provider: providers.Provider,
  ) {
    const contract = new Contract(address, ABI, provider)
    this.methods = contract as this['methods']
  }
}

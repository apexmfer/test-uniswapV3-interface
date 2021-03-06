/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ITellerNftInterface extends ethers.utils.Interface {
  functions: {
    "addTier(tuple)": FunctionFragment;
    "contractURI()": FunctionFragment;
    "getOwnedTokens(address)": FunctionFragment;
    "getTier(uint256)": FunctionFragment;
    "getTierHashes(uint256)": FunctionFragment;
    "getTokenTier(uint256)": FunctionFragment;
    "initialize(address[])": FunctionFragment;
    "mint(uint256,address)": FunctionFragment;
    "setContractURIHash(string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addTier",
    values: [
      {
        baseLoanSize: BigNumberish;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumberish;
        contributionMultiplier: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnedTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTierHashes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenTier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setContractURIHash",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addTier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTierHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setContractURIHash",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITellerNft extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITellerNftInterface;

  functions: {
    addTier(
      newTier: {
        baseLoanSize: BigNumberish;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumberish;
        contributionMultiplier: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addTier(tuple)"(
      newTier: {
        baseLoanSize: BigNumberish;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumberish;
        contributionMultiplier: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    contractURI(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "contractURI()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getOwnedTokens(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      owned: BigNumber[];
      0: BigNumber[];
    }>;

    "getOwnedTokens(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      owned: BigNumber[];
      0: BigNumber[];
    }>;

    getTier(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tier_: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
      0: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
    }>;

    "getTier(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tier_: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
      0: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
    }>;

    getTierHashes(
      tierIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      hashes_: string[];
      0: string[];
    }>;

    "getTierHashes(uint256)"(
      tierIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      hashes_: string[];
      0: string[];
    }>;

    getTokenTier(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      index_: BigNumber;
      tier_: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
      0: BigNumber;
      1: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
    }>;

    "getTokenTier(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      index_: BigNumber;
      tier_: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
      0: BigNumber;
      1: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
    }>;

    initialize(
      minters: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address[])"(
      minters: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mint(
      tierIndex: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(uint256,address)"(
      tierIndex: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setContractURIHash(
      contractURIHash: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setContractURIHash(string)"(
      contractURIHash: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addTier(
    newTier: {
      baseLoanSize: BigNumberish;
      hashes: string[];
      contributionAsset: string;
      contributionSize: BigNumberish;
      contributionMultiplier: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addTier(tuple)"(
    newTier: {
      baseLoanSize: BigNumberish;
      hashes: string[];
      contributionAsset: string;
      contributionSize: BigNumberish;
      contributionMultiplier: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  contractURI(overrides?: CallOverrides): Promise<string>;

  "contractURI()"(overrides?: CallOverrides): Promise<string>;

  getOwnedTokens(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getOwnedTokens(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getTier(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    baseLoanSize: BigNumber;
    hashes: string[];
    contributionAsset: string;
    contributionSize: BigNumber;
    contributionMultiplier: number;
    0: BigNumber;
    1: string[];
    2: string;
    3: BigNumber;
    4: number;
  }>;

  "getTier(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    baseLoanSize: BigNumber;
    hashes: string[];
    contributionAsset: string;
    contributionSize: BigNumber;
    contributionMultiplier: number;
    0: BigNumber;
    1: string[];
    2: string;
    3: BigNumber;
    4: number;
  }>;

  getTierHashes(
    tierIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "getTierHashes(uint256)"(
    tierIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getTokenTier(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    index_: BigNumber;
    tier_: {
      baseLoanSize: BigNumber;
      hashes: string[];
      contributionAsset: string;
      contributionSize: BigNumber;
      contributionMultiplier: number;
      0: BigNumber;
      1: string[];
      2: string;
      3: BigNumber;
      4: number;
    };
    0: BigNumber;
    1: {
      baseLoanSize: BigNumber;
      hashes: string[];
      contributionAsset: string;
      contributionSize: BigNumber;
      contributionMultiplier: number;
      0: BigNumber;
      1: string[];
      2: string;
      3: BigNumber;
      4: number;
    };
  }>;

  "getTokenTier(uint256)"(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    index_: BigNumber;
    tier_: {
      baseLoanSize: BigNumber;
      hashes: string[];
      contributionAsset: string;
      contributionSize: BigNumber;
      contributionMultiplier: number;
      0: BigNumber;
      1: string[];
      2: string;
      3: BigNumber;
      4: number;
    };
    0: BigNumber;
    1: {
      baseLoanSize: BigNumber;
      hashes: string[];
      contributionAsset: string;
      contributionSize: BigNumber;
      contributionMultiplier: number;
      0: BigNumber;
      1: string[];
      2: string;
      3: BigNumber;
      4: number;
    };
  }>;

  initialize(
    minters: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address[])"(
    minters: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mint(
    tierIndex: BigNumberish,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(uint256,address)"(
    tierIndex: BigNumberish,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setContractURIHash(
    contractURIHash: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setContractURIHash(string)"(
    contractURIHash: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addTier(
      newTier: {
        baseLoanSize: BigNumberish;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumberish;
        contributionMultiplier: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "addTier(tuple)"(
      newTier: {
        baseLoanSize: BigNumberish;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumberish;
        contributionMultiplier: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    contractURI(overrides?: CallOverrides): Promise<string>;

    "contractURI()"(overrides?: CallOverrides): Promise<string>;

    getOwnedTokens(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getOwnedTokens(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getTier(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      baseLoanSize: BigNumber;
      hashes: string[];
      contributionAsset: string;
      contributionSize: BigNumber;
      contributionMultiplier: number;
      0: BigNumber;
      1: string[];
      2: string;
      3: BigNumber;
      4: number;
    }>;

    "getTier(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      baseLoanSize: BigNumber;
      hashes: string[];
      contributionAsset: string;
      contributionSize: BigNumber;
      contributionMultiplier: number;
      0: BigNumber;
      1: string[];
      2: string;
      3: BigNumber;
      4: number;
    }>;

    getTierHashes(
      tierIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "getTierHashes(uint256)"(
      tierIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getTokenTier(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      index_: BigNumber;
      tier_: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
      0: BigNumber;
      1: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
    }>;

    "getTokenTier(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      index_: BigNumber;
      tier_: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
      0: BigNumber;
      1: {
        baseLoanSize: BigNumber;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumber;
        contributionMultiplier: number;
        0: BigNumber;
        1: string[];
        2: string;
        3: BigNumber;
        4: number;
      };
    }>;

    initialize(minters: string[], overrides?: CallOverrides): Promise<void>;

    "initialize(address[])"(
      minters: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      tierIndex: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(uint256,address)"(
      tierIndex: BigNumberish,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setContractURIHash(
      contractURIHash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setContractURIHash(string)"(
      contractURIHash: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addTier(
      newTier: {
        baseLoanSize: BigNumberish;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumberish;
        contributionMultiplier: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addTier(tuple)"(
      newTier: {
        baseLoanSize: BigNumberish;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumberish;
        contributionMultiplier: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    contractURI(overrides?: CallOverrides): Promise<BigNumber>;

    "contractURI()"(overrides?: CallOverrides): Promise<BigNumber>;

    getOwnedTokens(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOwnedTokens(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTier(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "getTier(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTierHashes(
      tierIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTierHashes(uint256)"(
      tierIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenTier(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokenTier(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(minters: string[], overrides?: Overrides): Promise<BigNumber>;

    "initialize(address[])"(
      minters: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    mint(
      tierIndex: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(uint256,address)"(
      tierIndex: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setContractURIHash(
      contractURIHash: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setContractURIHash(string)"(
      contractURIHash: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addTier(
      newTier: {
        baseLoanSize: BigNumberish;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumberish;
        contributionMultiplier: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addTier(tuple)"(
      newTier: {
        baseLoanSize: BigNumberish;
        hashes: string[];
        contributionAsset: string;
        contributionSize: BigNumberish;
        contributionMultiplier: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "contractURI()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwnedTokens(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOwnedTokens(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTier(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTier(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTierHashes(
      tierIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTierHashes(uint256)"(
      tierIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenTier(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTokenTier(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      minters: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address[])"(
      minters: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mint(
      tierIndex: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(uint256,address)"(
      tierIndex: BigNumberish,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setContractURIHash(
      contractURIHash: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setContractURIHash(string)"(
      contractURIHash: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}

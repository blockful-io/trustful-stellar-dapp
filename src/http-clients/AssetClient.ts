import httpClient from "./HttpClient";

export class AssetClient {
  static assetPath = "asset";

  postAsset(
    receivingPublicKey: string,
    assetName: string[],
    community: string
  ) {
    return httpClient.post<
      any,
      Object,
      { receivingPublicKey: string; assetName: string[]; community: string }
    >(
      AssetClient.assetPath,
      {},
      {
        receivingPublicKey,
        assetName,
        community,
      }
    );
  }
}

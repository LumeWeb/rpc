/// <reference types="node" />
import ProtomuxRPC from "protomux-rpc";
export default class RPC extends ProtomuxRPC {
    constructor(stream: any, options?: {});
    request(method: any, value?: Buffer | Uint8Array | string, options?: {}): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map
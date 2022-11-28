// @ts-ignore
import ProtomuxRPC from "protomux-rpc";
// @ts-ignore
import c from "compact-encoding";
import b4a from "b4a";
const ID = b4a.from("lumeweb");
export default class RPC extends ProtomuxRPC {
    constructor(stream, options = {}) {
        options = {
            ...{
                id: ID,
                valueEncoding: c.json,
            },
            ...options,
        };
        super(stream, options);
    }
    async request(method, value = "", options = {}) {
        return super.request(method, value, options);
    }
}

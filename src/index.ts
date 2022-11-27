// @ts-ignore
import ProtomuxRPC from "protomux-rpc";
// @ts-ignore
import c from "compact-encoding";
import b4a from "b4a";

const ID = b4a.from("lumeweb");

export default class RPC extends ProtomuxRPC {
  constructor(stream: any, options = {}) {
    options = {
      ...{
        id: ID,
        valueEncoding: c.json,
      },
      ...options,
    };
    super(stream, options);
  }

  async request(
    method: any,
    value: Buffer | Uint8Array | string = b4a.from(""),
    options = {}
  ) {
    if (!b4a.isBuffer(value)) {
      value = b4a.from(value);
    }

    return super.request(method, value, options);
  }
}

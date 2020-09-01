import * as React from "react";
import * as ReactDOM from "react-dom";
import { HelloWorld } from "./HelloWorld";

import dotnetify from "dotnetify";
import { MessagePackHubProtocol } from "@aspnet/signalr-protocol-msgpack";
dotnetify.hubOptions.connectionBuilder = builder => builder.withHubProtocol(new MessagePackHubProtocol());

ReactDOM.render(<HelloWorld />, document.getElementById("App"));

/* @flow */
/* eslint import/no-default-export: off */

import { setupSDK, type SetupComponent } from "@paypal/sdk-client/src";

export default (
  namespace: string,
  verison: string,
  components: $ReadOnlyArray<SetupComponent<mixed>>
  // $FlowFixMe
) => {
  return setupSDK(components);
};

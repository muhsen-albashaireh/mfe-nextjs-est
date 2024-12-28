/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'landing/*' {
  import { FC } from 'react';
  const value: FC<any>;
  export default value;
}

import { ReactChild, ReactFragment, ReactPortal } from 'react';

export type TEventContentArg = {
  event: {
    _def: {
      title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
    };
    extendedProps: {
      curator: { firstname: string;
      };
    };
  };
  isPast: boolean
}

import React from 'react';

import { cn } from '@documenso/ui/lib/utils';

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  label: string;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, label, onClick } = props;

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'text-muted-foreground dark:text-muted-foreground/60 border-b-2 border-transparent py-4',
        {
          'border-primary text-foreground dark:text-muted-foreground border-b-2': selected,
        },
      )}
    >
      {label}
    </button>
  );
};

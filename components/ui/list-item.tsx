import clsx from 'clsx';
import { NavigationMenu } from 'radix-ui';
import React from 'react';

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          ref={forwardedRef}
          className={clsx(
            "block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight transition hover:bg-mauve-100 focus:ring-2 focus:ring-violet-300",
            className
          )}
          {...props}
        >
          <div className="font-medium text-violet-900 mb-1">{title}</div>
          <p className="text-mauve-700 text-sm leading-relaxed">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default ListItem
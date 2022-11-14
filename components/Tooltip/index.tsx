import { CSSTransitionGroup } from "react-transition-group";

export function Tooltip({ open, children }) {
  return (
    <CSSTransitionGroup
      className="absolute left-1/2 bottom-auto top-0 -translate-x-1/2 translate-y-[calc(-100%-10px)] select-none pointer-coarse:hidden sm:bottom-0 sm:top-auto sm:-translate-y-[calc(-100%-10px)]"
      transitionName="tooltip"
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    >
      {open ? (
        <div
          role="tooltip"
          className="whitespace-nowrap rounded border border-transparent bg-neutral-900 px-1.5 py-0.5 text-center text-xs font-medium tracking-xs text-silver dark:border-white/[.08] dark:bg-black/[.96] dark:text-silver-dark"
        >
          {children}
        </div>
      ) : null}
    </CSSTransitionGroup>
  );
}

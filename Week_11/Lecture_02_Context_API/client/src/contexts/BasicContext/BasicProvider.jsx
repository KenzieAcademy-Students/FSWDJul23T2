import { createContext } from "react";

/**
 * A Context Provider is, at its core, a React component.
 * Generally though, it's not a component used to display
 * things, but rather to wrap a set of components with
 * the expectation of providing some values to all components
 * within the node tree the provider is wrapped around
 *
 * In order to create a provider, we must first create a
 * context using the `createContext()` function
 */

export const basicContext = createContext();

/**
 * Then, create a context provider as you would any other
 * React component.
 *
 * The Provider should accept children as props
 *
 * The Provider should return a special component via
 * <`contextName`.Provider>{children}</`contextName`.Provider>
 *
 * and it should render children within
 *
 * Finally, to make some value accessible to all children
 * in the provider, add a `value` prop to the Provider
 */
const BasicProvider = ({ children }) => {
  return (
    <basicContext.Provider value="Test Value">{children}</basicContext.Provider>
  );
};

/**
 * In order to make this context accessible, we'll need
 * to wrap the provider around the components in question.
 * In most cases, we're talking about wrapping the provider
 * around App in main.jsx
 */

export default BasicProvider;

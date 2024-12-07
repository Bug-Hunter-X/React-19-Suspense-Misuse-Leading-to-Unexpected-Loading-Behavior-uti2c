# React 19 Suspense Bug
This repository demonstrates a common error when using the Suspense component with lazy-loaded components in React 19. The issue arises from directly rendering the lazy component within the Suspense component without a proper wrapper. This leads to unexpected loading behavior or errors.

## Bug
The `bug.js` file shows an incorrect usage of the Suspense component.  The `LazyComponent` is rendered directly within the `Suspense` component. This means the fallback is not correctly utilized when the lazy component is still loading. 

## Solution
The `bugSolution.js` file demonstrates the correct way to use Suspense.  The `LazyComponent` is wrapped in a div, allowing the Suspense component to effectively handle the loading state and display the fallback until the `LazyComponent` has fully loaded. 

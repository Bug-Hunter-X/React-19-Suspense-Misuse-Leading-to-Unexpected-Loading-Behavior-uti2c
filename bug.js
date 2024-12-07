```javascript
//Incorrect usage of Suspense component
import { Suspense, lazy } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Incorrect: Directly rendering LazyComponent inside Suspense */}
      <LazyComponent />
    </Suspense>
  );
}
```
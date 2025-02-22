In React Router Dom v6, the `useParams()` hook doesn't update when the URL changes due to an internal navigation within the application.  This can lead to stale data being displayed if the component doesn't re-render appropriately.

```javascript
// buggy component
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();

  // ... fetch data using id ...
  return (
    <div>
      <h1>Details for ID: {id}</h1>
      {/* ... display data ... */}
    </div>
  );
}
```
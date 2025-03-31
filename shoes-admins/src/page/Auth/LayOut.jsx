// Layout.jsx
import { Outlet } from 'react-router-dom';

export const LayOut = () => {
  return (
    <div>
      <header>My App Header</header>
      <main>
        <Outlet />  {/* This renders the matched child route */}
      </main>
      <footer>My App Footer</footer>
    </div>
  )
}
import { Routes, Route } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route index path="/login" />
      <Route path="/new-account" />
      <Route path="/home" />
    </Routes>
  )
}
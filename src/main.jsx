import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Realisations from './pages/Realisations.jsx'
import Services from './pages/Services.jsx'
import LegalMentions from './pages/legalMentions.jsx'
import GitHub from './pages/GitHub.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

import './style/index.css'

import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/realisations' element={<Realisations />} />
      <Route path='/services' element={<Services />} />
      <Route path='/legal-mentions' element={<LegalMentions />} />
      <Route path='/github-infos' element={<GitHub />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
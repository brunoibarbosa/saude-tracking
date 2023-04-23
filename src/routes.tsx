import { Routes as RoutesDom, Route } from 'react-router-dom'
import { Home } from './templates/Home'
import { About } from './templates/About'
import { Track } from './templates/Track'
import { Contact } from './templates/Contact'

export const Routes = () => {
  return (
    <RoutesDom>
      <Route index element={<Home />} />
      <Route path="acompanhar" element={<Track />} />
      <Route path="sobre" element={<About />} />
      <Route path="contatos" element={<Contact />} />
    </RoutesDom>
  )
}

export default Routes

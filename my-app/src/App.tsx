import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CategoryListPage from './components/category/list/CategoryListPage'
import DefaultLayout from './components/containers/default/DefaultLayout'
import CategoryCreatePage from './components/category/create/CategoryCreatePage'
import CategoryEditPage from './components/category/edit/CategoryEditPage'

function App() {
  return (
    <>
      <Routes>
          <Route path={"/"} element={<DefaultLayout/>}>
              <Route index element={<CategoryListPage />} />
              <Route path={"create"} element={<CategoryCreatePage />} />
              <Route path="category/edit/:id" element={<CategoryEditPage />} />
          </Route>
      </Routes>
    </>
  )
}

export default App

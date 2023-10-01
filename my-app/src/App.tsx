import { Route, Routes } from 'react-router-dom'
import './App.css'
import CategoryListPage from './components/category/list/CategoryListPage'
import DefaultLayout from './components/containers/default/DefaultLayout'
import CategoryCreatePage from './components/category/create/CategoryCreatePage'
import CategoryEditPage from './components/category/edit/CategoryEditPage'
import LoginPage from './components/auth/login/LoginPage'
import ProductCreatePage from './components/product/create/ProductCreatePage'

function App() {
  return (
    <>
      <Routes>
            <Route path={"/"} element={<DefaultLayout/>}>
                <Route index element={<CategoryListPage />} />
                <Route path={"create"} element={<CategoryCreatePage />} />
                <Route path="category/edit/:id" element={<CategoryEditPage />} />
                <Route path={"product"}>
                    <Route path={"create"} element={<ProductCreatePage/>} />  
                </Route>

                <Route path={"login"} element={<LoginPage />}></Route>
            </Route>
        </Routes>
    </>
  )
}

export default App

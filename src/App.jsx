import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

{
  /* ADD / EDIT CATEGORY */
}

import AddCategory from "./pages/AddCategory";
import EditCategory from "./pages/EditCategory";

{
  /* ADD / EDIT POST */
}

import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";

{
  /* ADD / EDIT USER */
}

import Adduser from "./pages/Adduser";
import EditUser from "./pages/EditUser";

// 
import Authors from "./pages/Authors";
import Category from "./pages/Category";
import CategoryPage from "./pages/CategoryPage";

import Dashboard from "./pages/Dashboard";
import ManageCategory from "./pages/ManageCategory";
import ManageUser from "./pages/ManageUser";

import LogOut from "./pages/LogOut";
import PostDetail from "./pages/PostDetail";
import PostItem from "./pages/PostItem";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import DeletePost from "./pages/DeletePost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreatePost from "./pages/CreatePost";
import AuthorsPost from "./pages/AuthorsPost";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* ADD / EDIT CATEGORY */}
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/editcategory" element={<EditCategory />} />

        {/* ADD / EDIT POST */}

        <Route path="/addpost" element={<AddPost />} />
        <Route path="/editpost" element={<EditPost />} />

        {/* ADD / EDIT USER */}

        <Route path="/adduser" element={<Adduser />} />
        <Route path="/edituser" element={<EditUser />} />


        {/* MANAGEMENT */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/managecategory" element={<ManageCategory />} />
        <Route path="/manageuser" element={<ManageUser />} />


        {/*  */}
        
        <Route path="/createpost" element={<CreatePost />} />

        <Route path="/authors" element={<Authors />} />
        <Route path="/authorspost" element={<AuthorsPost />} />



        <Route path="/category" element={<CategoryPage />} />
        <Route path="*" element={<Category />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/delete" element={<DeletePost />} />
        <Route path="/postdetail" element={<PostDetail />} />
        <Route path="*" element={<PostItem />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

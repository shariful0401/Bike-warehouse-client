import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom'
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }

  return (
    <div class="navbar bg-cyan-200 rounded">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><a>About</a></li>
            <li><a>Blogs</a></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </div>
        <Link to='/' class="btn btn-ghost normal-case text-xl">Ware House</Link>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li><Link to='/'>Home</Link></li>
        { user && <>
         <li><Link to='/manageProduct'>Manage Product</Link></li>
          <li><Link to='/addProduct'>Add Product</Link></li>
          <li><Link to='/myProduct'>My Product</Link></li>
          </>
          }
          <li><a>About</a></li>
          <li><a>Blogs</a></li>
            <li>{ user? <button onClick={handleSignOut}>signOut</button>: <Link to='/login'>Login</Link>}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
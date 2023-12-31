import React from "react";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
return (
  <header class="bg-white sticky top-0 z-50 ">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Remerge</span>
        <img class="h-8 w-auto" src="/images/logo.png" alt=""></img>
      </a>
    </div>
    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <a href="/dashboard" class="text-sm font-regular leading-6 text-gray-900">Product</a>
      <a href="#" class="text-sm font-regular leading-6 text-gray-900">About</a>
      <a href="/auth" class="text-sm font-regular leading-6 text-gray-900">Pricing</a>
      <a href="/contact" class="text-sm font-regular leading-6 text-gray-900">Contact</a>
    </div>
    <div class=" lg:flex lg:gap-x-12 inline-flex lg:flex-1 lg:justify-end items-center justify-center gap-x-6">
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
    </div>
    </div>
  </nav>
</header>
 );
}
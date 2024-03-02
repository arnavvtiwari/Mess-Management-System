import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [rollno, setrollno] = useState("")
  const [password, setpassword] = useState("")
  const [name, setname] = useState("")
  const [phone, setphone] = useState("")
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src="/ietlogo80.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400  sm:text-sm sm:leading-6"
                  onChange={(e)=>{setname(e.target.value)}}
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  required
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400  sm:text-sm sm:leading-6"
                  onChange={(e)=>{setphone(e.target.value)}}
                />
              </div>
            </div>
            <div>
              <label htmlFor="rollno" className="block text-sm font-medium leading-6 text-gray-900">
                Roll Number
              </label>
              <div className="mt-2">
                <input
                  id="rollno"
                  name="rollno"
                  type="rollno"
                  autoComplete="rollno"
                  required
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400  sm:text-sm sm:leading-6"
                  onChange={(e)=>{setrollno(e.target.value)}}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <Link to="/login/manager_login" className="font-semibold text-slate-600 hover:text-slate-500">
                    Log in as Manager
                  </Link>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400  sm:text-sm sm:leading-6"
                  onChange={(e)=>{setpassword(e.target.value)}}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already registered?{' '}
            <Link to="/login" className="font-semibold leading-6 text-slate-600 hover:text-slate-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
import React from 'react'

const Signup = () => {
  return (
    //blur background whith a form in the middle add cross icon to close the form and a submit button and fileds with name email and password 
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 text-center">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Sign Up</h2>
            <form>
              <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
              <div>
                <p className='text-sm text-gray-600 mt-2'>
                  Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
                </p>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>

  )}

  export default Signup
import React from 'react'

const PaymentFailed = () => {
  return (
    <div class="my-20">
      <div class="bg-white p-6">
        <svg
              class="w-16 h-16 mx-auto my-6"
              width="200px"
              height="200px"
              viewBox="0 0 200 200"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>

        <div class="text-center">
            <h3 class="md:text-2xl text-base text-red-900 font-semibold text-center">Payment Cancelled!</h3>
            <p class="text-gray-600 my-2">Try again later.</p>
            <p> Have a great day!  </p>
          <div class="py-10 text-center">
              <a href="/" class="px-12 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3">
                Return To Home
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentFailed
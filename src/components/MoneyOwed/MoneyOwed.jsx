import React from 'react'
import RightNavBar from '../RightNavBar/RightNavBar'

export default function MoneyOwed() {
  return (
    <>
      <div className="container-fluid">
                <div className="row">

                    <section className="col-9 vh-100"></section>

                    <aside className="col-3 vh-100 text-center">
                        {/* <div className="overflow-hidden"> */}
                            <RightNavBar />
                        {/* </div> */}
                    </aside>

                </div>
            </div>
    </>
  )
}

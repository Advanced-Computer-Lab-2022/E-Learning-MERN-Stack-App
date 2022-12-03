import Filter from '../../components/Filter/Filter.jsx'
import Header from '../../components/Header/Header.jsx'
import Main from '../../components/Main/Main.jsx'
import RightNavBar from '../../components/RightNavBar/RightNavBar.jsx'
import './InstructorPage.css'


export default function InstructorPage() {
    return (
        <>
            <div class="container-fluid">
                <div class="row">

                    <section className="col-9 vh-100">
                        <div className='mt-3 overflow-hidden'>
                            <Header />
                        </div>
                        <div className='mt-3'>
                            <Main />
                        </div>
                    </section>

                    <aside class="col-3 vh-100 text-center">
                        <div className='h-auto'>
                            <RightNavBar />
                            <Filter />
                        </div>
                    </aside>

                </div>
            </div>
        </>
    )
}

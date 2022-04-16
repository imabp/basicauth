import type { NextPage } from 'next'

const Login: NextPage = () => {
  return (<>
    <div
      className='flex flex-row w-full justify-center'
    >

      <div className='m-5 flex-col'>
        <h1 className="text-xl font-bold text-center">
          Basic Authentication Demo
        </h1>
          <div className='max-w-xs mt-5'>
            Login Component Goes Here
          </div>
      </div>
    </div>
  </>

  )
}

export default Login

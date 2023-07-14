import { Container } from '../container/container.component'

export const Banner = () => {
  return (
    <main>
      <div className='bg-theme-green shadow-banner text-white p-8 mb-8'>
        <Container>
          <h1 className='font-tilium drop-shadow-logo text-center text-logo pb-2'>Conduit</h1>
          <p className='text-center text-2xl font-light'>A place to share your knowledge.</p>
        </Container>
      </div>
    </main>
  )
}

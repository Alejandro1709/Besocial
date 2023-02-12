import Button from './Button';

function Post() {
  return (
    <article className='flex flex-col gap-2 p-4 bg-white rounded-md border'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-2 items-center'>
          <img
            src='https://picsum.photos/200'
            alt=''
            className='w-10 h-10 rounded-full'
          />
          <div className=''>
            <h1 className='font-medium text-gray-700'>John Doe</h1>
            <p className='text-gray-500 text-sm'>2 hours ago</p>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <Button>Follow</Button>
        </div>
      </div>
      <p className='text-gray-700'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae
        eius impedit voluptatibus ut iste sequi, sint dolorum natus suscipit
        eum. Minima quos tempora excepturi doloremque, eos, porro delectus
        distinctio, iure iste sapiente numquam animi cupiditate nemo perferendis
        voluptatibus eligendi commodi ab ullam maxime quo natus. Nostrum esse
        suscipit voluptatum nobis cumque ipsa quidem, praesentium eligendi amet
        at ad rem, quia distinctio, non quaerat qui. Repudiandae, quod, ratione
        dolore recusandae nisi quibusdam repellat a quisquam facere expedita et
        facilis hic! Rem pariatur quam asperiores at nemo, aspernatur labore!
        Non illo sapiente doloribus molestias, rerum quos veritatis voluptates
        ea molestiae odit blanditiis nostrum dignissimos. Ipsum doloribus,
        repellendus neque architecto error animi iusto ducimus autem dolorum
        voluptatem cum harum beatae accusamus saepe officiis soluta sequi,
        numquam inventore consectetur id ad voluptatum, placeat qui! Nemo veniam
        quam ea magni perspiciatis, deserunt culpa dolore maiores ducimus ipsa
        ipsam quos quasi possimus beatae rem officia blanditiis ab pariatur
        numquam. Soluta, quisquam. Nemo provident esse alias quaerat eveniet
        nesciunt ea! Praesentium excepturi ipsa nihil deserunt numquam delectus
        quia magni incidunt, obcaecati nulla consectetur ullam rerum ipsum nisi?
        Eos, nisi nemo dolor voluptatem molestiae blanditiis laborum suscipit
        eaque perferendis deserunt magni minima, possimus, vel repellat voluptas
        commodi!
      </p>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center'>
          <button className='flex flex-row items-center'>Like</button>
          <button className='flex flex-row items-center ml-4'>Comment</button>
        </div>
      </div>
    </article>
  );
}

export default Post;

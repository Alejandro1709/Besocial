import Button from '@/components/Button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import NavLink from '@/components/NavLink';
import { prisma } from '@/utils/prisma';
import type IPost from '@/types/post';

type Props = {
  post: string;
};

function PostPage({ post }: Props) {
  const parsedPost: IPost = JSON.parse(post);

  return (
    <Layout title='Besocial | Post'>
      <Section>
        <NavLink href='/' type='primary'>
          Back
        </NavLink>
        <article className='flex flex-col gap-2 p-4 mt-4 bg-white rounded-md border cursor-pointer'>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row gap-2 items-center'>
              <img
                src={parsedPost.author.avatar}
                alt={parsedPost.author.name}
                className='w-10 h-10 rounded-full'
              />
              <div className=''>
                <h1 className='font-medium text-gray-700'>
                  {parsedPost.author.name}
                </h1>
                <p className='text-gray-500 text-sm'>2 hours ago</p>
              </div>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <NavLink href={`/posts/${parsedPost.id}/edit`} type='primary'>
                Edit
              </NavLink>
              <Button type='danger'>Delete</Button>
            </div>
          </div>
          <p className='text-gray-700'>{parsedPost.content}</p>
        </article>
      </Section>
      <Section mt={4}>
        <h2 className='text-2xl font-medium'>22 Comments</h2>
        <div className='flex flex-col gap-4 my-4'>
          <article className='flex flex-col gap-2 p-4 bg-white rounded-md border cursor-pointer'>
            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-row gap-2 items-center'>
                <img
                  src='https://picsum.photos/200'
                  alt='John Doe'
                  className='w-10 h-10 rounded-full'
                />
                <div className=''>
                  <h1 className='font-medium text-gray-700'>John Doe</h1>
                  <p className='text-gray-500 text-sm'>2 hours ago</p>
                </div>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <Button type='primary'>Edit</Button>
                <Button type='danger'>Delete</Button>
              </div>
            </div>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </article>
        </div>
      </Section>
    </Layout>
  );
}

export default PostPage;

export async function getServerSideProps(ctx: {
  params: { id: string | number };
}) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(ctx.params.id),
    },
    include: {
      author: true,
    },
  });

  return {
    props: {
      post: JSON.stringify(post),
    },
  };
}

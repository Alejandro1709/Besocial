import { prisma } from '@/utils/prisma';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import NavLink from '@/components/NavLink';
import Comments from '@/components/Comments';
import Post from '@/components/Post';
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
        <Post post={parsedPost} type='post' />
      </Section>
      <Section mt={4}>
        <h2 className='text-2xl font-medium'>1 Comment</h2>
        <Comments />
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

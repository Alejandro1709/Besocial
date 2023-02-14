import Feed from '@/components/Feed';
import Layout from '@/components/Layout';
import PostForm from '@/components/PostForm';
import Section from '@/components/Section';
import IPost from '@/types/post';
import { prisma } from '@/utils/prisma';

type Props = {
  feed: string;
};

export default function Home({ feed }: Props) {
  const parsedFeed: IPost[] = JSON.parse(feed);

  return (
    <Layout title='Besocial | Feed'>
      <Section>
        <PostForm />
        <Feed feed={parsedFeed} />
      </Section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const feed = await prisma.post.findMany({
    include: {
      author: {
        include: {
          profile: true,
        },
      },
    },
  });

  return {
    props: {
      feed: JSON.stringify(feed),
    },
  };
}

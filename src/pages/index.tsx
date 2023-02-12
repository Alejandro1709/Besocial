import Feed from '@/components/Feed';
import Layout from '@/components/Layout';
import PostForm from '@/components/PostForm';
import Section from '@/components/Section';

export default function Home() {
  return (
    <Layout title='Besocial | Feed'>
      <Section>
        <PostForm />
        <Feed />
      </Section>
    </Layout>
  );
}

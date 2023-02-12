import Button from '@/components/Button';
import Layout from '@/components/Layout';
import NavLink from '@/components/NavLink';
import Section from '@/components/Section';

function EditPostPage() {
  return (
    <Layout title='Sociable | Edit'>
      <Section>
        <NavLink href='/posts/22' type='danger'>
          Cancel
        </NavLink>
        <form className='flex flex-col gap-4 mt-4'>
          <textarea
            className='resize-none border rounded-md'
            name='content'
            id='content'
            rows={4}
          />
          <Button type='primary'>Update</Button>
        </form>
      </Section>
    </Layout>
  );
}

export default EditPostPage;

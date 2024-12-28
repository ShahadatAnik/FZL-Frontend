import PageContainer from '@/components/page-container';
import PageTitle from '@/components/page-title';
import Content from './_components/content';

const Page = () => {
  return (
    <div>
      <PageTitle title='Product Details' />
      <PageContainer>
        <Content />
      </PageContainer>
    </div>
  );
};

export default Page;

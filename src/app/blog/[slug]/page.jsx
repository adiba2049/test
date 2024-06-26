// pages/blog/[slug]/page.jsx

// Функция для генерации статических параметров
export async function generateStaticParams() {
    return [
      { slug: 'example' }, // Укажите здесь ваши статические параметры
    ];
  }
  
  // Функция для получения данных на основе параметров
  export async function getStaticProps({ params }) {
    return {
      props: {
        slug: params.slug,
      },
    };
  }
  
  const Slug = ({ slug }) => {
    return (
      <h1>About Sadoqat's career: {slug}</h1>
    );
  };
  
  export default Slug;
  
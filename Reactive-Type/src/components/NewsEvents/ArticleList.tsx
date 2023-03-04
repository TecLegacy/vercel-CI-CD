import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface Article {
  date: string;
  link: string;
  title: string;
  excerpt: string;
  image: string;
  creator: string | null;
}

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl =
        'https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed';
      setIsLoading(true);
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        const articleData = data.map((article: any) => {
          return {
            date: article.date,
            link: article.link,
            title: article.title.rendered,
            excerpt: article.excerpt.rendered,
            image: article.jetpack_featured_media_url,
            creator: null,
          };
        });
        setArticles(articleData);
      } catch (error) {
        setIsError(true);
        throw new Error({ message: 'error' }, err);
        console.log();
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const cardVariants = {
    hover: {
      scale: 1.03,
      boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
    },
  };

  switch (true) {
    case isLoading:
      return (
        <div className="py-8 text-center">
          <div className="ease inline-block h-6 w-6 animate-spin rounded-full bg-gray-700 duration-300"></div>
          <p className="text-lg text-gray-700">Loading...</p>
        </div>
      );
    case isError:
      return (
        <div className="py-8 text-center">
          <p className="text-lg text-red-600">
            Error fetching data. Please try again later.
          </p>
        </div>
      );
    default:
      return (
        <div className="-mx-4 flex flex-wrap">
          {articles.map((article, index) => (
            <motion.div
              className="w-full p-4 md:w-1/2 lg:w-1/3"
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="rounded-lg bg-white shadow-lg">
                <img
                  className="w-full rounded-t-lg"
                  src={article.image}
                  alt={article.title}
                />
                <div className="px-6 py-4">
                  <h2 className="mb-2 text-xl font-semibold">
                    {article.title}
                  </h2>
                  <p
                    className="mb-4 text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: article.excerpt }}
                  />
                  <p className="text-sm text-gray-600">
                    By {article.creator} on {article.date}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <a
                    className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      );
  }
};

export default ArticleList;

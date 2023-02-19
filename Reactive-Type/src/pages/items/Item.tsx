import { useParams, useNavigate } from 'react-router-dom';

type Props = {};

const Item = (props: Props) => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate('/product');
  };

  // const activePage = param.itemId?.replaceAll(/ /g, '');
  const param = useParams();
  // console.log(param.itemId);
  const [page, pageId] = param.itemId?.split(' ') || [];
  // console.log(activePage, 'pages', pageId);
  console.log('pages', pageId);
  const activePage = page.replaceAll(/:/g, ' ');
  // console.log(page, 'page Id', pageId);
  return (
    <>
      <div className=" mx-auto mt-20 flex w-5/6 flex-col items-center justify-center gap-8 py-10 ">
        <h1>{activePage}</h1>
        <button
          // style={{ all: 'unset' }}
          className=" rounded-lg  bg-orange-300 py-2 px-2 text-blue-50  shadow-lg hover:bg-orange-400  hover:text-black"
          onClick={backHandler}
        >
          Go back to Products
        </button>
      </div>
    </>
  );
};

export default Item;

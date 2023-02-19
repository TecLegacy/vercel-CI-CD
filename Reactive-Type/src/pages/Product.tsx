import { Link } from 'react-router-dom';

type Props = {};

const DUMMY_EVENT = [
  {
    event: 'Apple',
    id: 1,
    link() {
      return `${this.event} ${this.id} `;
    },
  },
  {
    event: 'Banana',
    id: 2,
    link() {
      return `${this.event} ${this.id} `;
    },
  },
  {
    event: 'Grapes',
    id: 3,
    link() {
      return `${this.event} ${this.id} `;
    },
  },
];

const Product = (props: Props) => {
  return (
    <>
      <div>Product</div>
      <div>
        <ul>
          {DUMMY_EVENT.map((pages) => (
            <li key={pages.id} className="cursor-pointer font-bold">
              <Link to={`/items/:${pages.link()}`}>{pages.event}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Product;

type Props = {
  onData?: any;
};

const StarWarData = ({ onData }: Props) => {
  console.log(onData.results);
  return (
    <div className=" h-full bg-orange-100  ">
      Star War API
      <div
        className="mx-auto mt-24 flex w-5/6 flex-col items-center
       justify-center gap-8 bg-orange-100  py-4 font-serif text-xl  font-thin text-red-900
      "
      >
        {onData.results.map((item: any, i: any) => (
          <div className=" flex flex-col gap-8 py-8  px-10 shadow-lg" key={i}>
            <h1 className=" flex items-center justify-center">{item.title}</h1>
            <p className=" italic ">{item.opening_crawl}</p>
            <div>
              <div
                className=" flex
              gap-8"
              >
                <span>Director {item.director}</span>
                <span> Producer {item.producer}</span>
              </div>
              <h4 className=" mt-8  flex items-end justify-end ">
                Release date {item.release_date}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarWarData;

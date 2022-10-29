import Stripe from "components/Stripe";

const Item = ({ title }: { title: any }) => {
  return (
    <div className="h-[5rem] flex items-center justify-center">
      <p
        className="text-lg uppercase tracking-[.3rem] font-semibold text-center text-white opacity-80"
        style={{ lineHeight: 1.8 }}
      >
        {title}
      </p>
    </div>
  );
};

const DividerLine = () => {
  return <div className="h-[4rem] w-1 bg-white"></div>;
};

function Unique() {
  return (
    <div className="py-14 relative">
      <img
        src="images/unique-bg.png"
        className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-full object-cover -z-20"
        alt=""
      />

      <img
        src="images/wrap-stripe.png"
        className="absolute top-0 left-0 w-full h-full -z-10"
        alt=""
      />

      <div className="h-[66px] bg-secondary-100 w-full mb-100px shadow-[0px_0px_20px_rgba(0,0,0,.4)]"></div>

      <div className="relative mb-150px">
        <img
          src="images/two-stripe.png"
          className="w-full absolute top-1/2 -translate-y-1/2 left-0 h-[calc(100%+6rem)] pointer-events-none select-none"
          alt=""
        />

        <div className="container-2 relative">
          <div className="h-[340px] w-[90%] mx-auto bg-secondary-200 shadow-[0_0_20px_rgba(0,0,0,.6)] rounded flex flex-col px-16 items-center justify-center text-center relative">
            <img
              src="images/t-stripes.png"
              className="min-w-[calc(100%+20rem)] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[calc(100%+2rem)] pointer-events-none select-none"
              alt=""
            />
            <h1 className="font-eras-demi text-4xl mb-5 text-white opacity-80 tracking-[.3rem]">
              Unique Historical Cyborgs
            </h1>

            <p className="text-2xl text-white opacity-80 font-medium">
              Attain salvation on blockchain epic battles. Inspired by
              blockchain and science, historical cyborgs will conquer Avalanche
            </p>

            {/* <img src="images/unique-text.png" className="w-[80%]" alt="" /> */}
          </div>
        </div>
      </div>

      <div className="container-2 grid grid-cols-4 gap-10 mb-100px">
        <img src="images/unique-img-1.png" className="w-full" alt="" />
        <img src="images/unique-img-2.png" className="w-full" alt="" />
        <img src="images/unique-img-3.png" className="w-full" alt="" />
        <img src="images/unique-img-4.png" className="w-full" alt="" />
      </div>

      <div className="container flex flex-wrap justify-center items-center space-x-10">
        {/* <img src="images/unqiue-details.png" className="w-full" alt="" /> */}
        <div className="my-2">
          <Item title="Revival token" />
        </div>

        <DividerLine />

        <div className="my-2">
          <Item
            title={
              <>
                3D fighting game <br /> fight stages nft
              </>
            }
          />
        </div>

        <DividerLine />

        <div className="my-2">
          <Item title="4 main character nft drop" />
        </div>

        <DividerLine />

        <div className="my-2">
          <Item
            title={
              <>
                advanced smart <br /> contract & daos
              </>
            }
          />
        </div>

        <DividerLine />

        <div className="my-2">
          <Item title="kalao citadel integration" />
        </div>
      </div>

      <div className="mt-100px">
        <Stripe direction="right" />
      </div>
    </div>
  );
}

export default Unique;

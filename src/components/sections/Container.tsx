interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className="relative h-[664px] lg:h-[760px] overflow-hidden">
      <div className="absolute inset-0 image-background bg-no-repeat bg-cover bg-center mx-auto max-w-[120rem] max-h-[63rem] overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 z-10">{children}</div>
        <div className="horizontal-1 absolute  bottom-0 h-[100px] w-[180%] md:w-[170%] lg:md:w-[150%] max-w-[2304px] left-1/2 transform -translate-x-1/2">
          <div className="horizontal-2 h-full mt-1"></div>
        </div>
      </div>
      <div className="radial-gradient absolute -z-10 h-full w-[160rem]  left-1/2 transform -translate-x-1/2"></div>
      <div className="linear-gradient absolute -z-10 h-full w-[120.8rem]  left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
}

export default Container;
